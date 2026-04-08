import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, ExternalLink, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { chatbotConfig, calculateRecommendations, type ServiceRecommendation } from "@/data/chatbotConfig";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  options?: { label: string; value: string }[];
  recommendations?: ServiceRecommendation[];
  showWhatsApp?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  };

  const addTimeout = (callback: () => void, delay: number) => {
    const id = setTimeout(callback, delay);
    timeoutRefs.current.push(id);
    return id;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Clear all pending timeouts when the component unmounts
  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const startChat = () => {
    setHasStarted(true);
    setIsTyping(true);
    
    addTimeout(() => {
      setIsTyping(false);
      setMessages([
        {
          id: "welcome",
          type: "bot",
          content: chatbotConfig.welcomeMessage
        }
      ]);
      
      addTimeout(() => {
        askQuestion(0);
      }, 800);
    }, 1000);
  };

  const askQuestion = (index: number) => {
    if (index >= chatbotConfig.questions.length) {
      showResults();
      return;
    }

    const question = chatbotConfig.questions[index];
    setIsTyping(true);

    addTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `q-${question.id}`,
          type: "bot",
          content: question.question,
          options: question.options.map(opt => ({ label: opt.label, value: opt.value }))
        }
      ]);
      setCurrentQuestionIndex(index);
    }, 800);
  };

  const handleOptionSelect = (optionValue: string) => {
    const question = chatbotConfig.questions[currentQuestionIndex];
    const selectedOption = question.options.find(opt => opt.value === optionValue);
    
    if (!selectedOption) return;

    setMessages(prev => [
      ...prev,
      {
        id: `a-${question.id}`,
        type: "user",
        content: selectedOption.label
      }
    ]);

    if (selectedOption.tags) {
      setSelectedTags(prev => [...prev, ...selectedOption.tags!]);
    }

    setAnsweredQuestions(prev => { const next = new Set(prev); next.add(question.id); return next; });

    const nextIndex = currentQuestionIndex + 1;
    addTimeout(() => {
      askQuestion(nextIndex);
    }, 500);
  };

  const showResults = () => {
    setIsTyping(true);
    const recommendations = calculateRecommendations(selectedTags);

    addTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: "closing",
          type: "bot",
          content: chatbotConfig.closingMessage
        }
      ]);

      addTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: "recommendations",
            type: "bot",
            content: "Here are my top recommendations for you:",
            recommendations: recommendations
          }
        ]);

        addTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: "whatsapp",
              type: "bot",
              content: "Ready to take the next step? Connect with our team for a free strategy consultation!",
              showWhatsApp: true
            }
          ]);
        }, 800);
      }, 800);
    }, 1000);
  };

  const resetChat = () => {
    clearAllTimeouts();
    setMessages([]);
    setCurrentQuestionIndex(0);
    setSelectedTags([]);
    setAnsweredQuestions(new Set());
    setHasStarted(false);
    setIsTyping(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    resetChat();
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `${chatbotConfig.whatsappMessage}\n\nMy interests: ${selectedTags.slice(0, 5).join(", ")}`
    );
    return `https://wa.me/${chatbotConfig.whatsappNumber}?text=${message}`;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{chatbotConfig.agentName}</h3>
                      <p className="text-xs text-white/80">{chatbotConfig.companyName} Assistant</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasStarted && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 h-8 px-2"
                        onClick={resetChat}
                        data-testid="button-restart-chat"
                      >
                        Restart
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20 h-8 w-8"
                      onClick={handleClose}
                      data-testid="button-close-chat"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="h-[400px] overflow-y-auto p-4 bg-muted/30">
                {!hasStarted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Find Your Perfect Solution</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Answer a few quick questions and I'll recommend the best marketing solutions for your business.
                    </p>
                    <Button
                      onClick={startChat}
                      className="gap-2"
                      data-testid="button-start-chat"
                    >
                      Let's Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2"
                              : "space-y-3"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="flex items-start gap-2">
                              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                              <div className="bg-card border rounded-2xl rounded-tl-md px-4 py-2 shadow-sm">
                                <p className="text-sm">{message.content}</p>
                              </div>
                            </div>
                          )}
                          
                          {message.type === "user" && (
                            <p className="text-sm">{message.content}</p>
                          )}

                          {message.options && (
                            <div className="pl-9 space-y-2 mt-2">
                              {message.options.map((option) => {
                                const questionId = message.id.startsWith("q-") ? message.id.slice(2) : "";
                                const isAnswered = answeredQuestions.has(questionId);
                                return (
                                  <Button
                                    key={option.value}
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start text-left h-auto py-2 px-3"
                                    onClick={() => !isAnswered && handleOptionSelect(option.value)}
                                    disabled={isAnswered}
                                    data-testid={`button-option-${option.value}`}
                                  >
                                    {option.label}
                                  </Button>
                                );
                              })}
                            </div>
                          )}

                          {message.recommendations && (
                            <div className="pl-9 space-y-2 mt-2">
                              {message.recommendations.map((rec) => (
                                <Link key={rec.serviceSlug} href={`/services/${rec.serviceSlug}`}>
                                  <Card className="p-3 hover-elevate cursor-pointer">
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <h4 className="font-medium text-sm">{rec.serviceName}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                                      </div>
                                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                    </div>
                                    <Badge variant="secondary" className="mt-2 text-xs">
                                      {Math.round((rec.matchScore / 5) * 100)}% match
                                    </Badge>
                                  </Card>
                                </Link>
                              ))}
                            </div>
                          )}

                          {message.showWhatsApp && (
                            <div className="pl-9 mt-3">
                              <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white" data-testid="button-whatsapp-connect">
                                  <SiWhatsapp className="h-5 w-5" />
                                  {chatbotConfig.ctaText}
                                </Button>
                              </a>
                              <p className="text-xs text-muted-foreground text-center mt-2">
                                Free consultation • No obligation
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-start gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-card border rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                          <div className="flex gap-1">
                            <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                            <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                            <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => isOpen ? handleClose() : setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg flex items-center justify-center ${
          showPulse ? "animate-pulse" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        data-testid="button-toggle-chatbot"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {!isOpen && showPulse && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-8 right-24 z-40 bg-card border shadow-lg rounded-lg px-4 py-2 max-w-[200px]"
        >
          <p className="text-sm">Need help? Chat with us!</p>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-card"></div>
        </motion.div>
      )}
    </>
  );
}
