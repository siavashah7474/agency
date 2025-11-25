import ServiceCard from '../ServiceCard'
import { MessageSquare } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ServiceCard
        icon={MessageSquare}
        title="WhatsApp AI Agent"
        description="24/7 automated lead handling with instant replies, photo evaluation, and booking automation."
        href="/services/whatsapp-ai-agent"
      />
    </div>
  )
}
