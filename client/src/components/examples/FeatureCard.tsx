import FeatureCard from '../FeatureCard'
import { Bot } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-6 max-w-xs">
      <FeatureCard
        icon={Bot}
        title="AI Automation"
        description="Intelligent systems that work 24/7 to handle leads, generate content, and analyze performance automatically."
      />
    </div>
  )
}
