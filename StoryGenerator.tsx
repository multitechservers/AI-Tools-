'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Stars } from 'lucide-react'

export default function Component() {
  const [childName, setChildName] = useState('')
  const [storyTheme, setStoryTheme] = useState('')
  const [generatedStory, setGeneratedStory] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  const generateStory = () => {
    setIsGenerating(true)
    // Simulating AI generation with a timeout
    setTimeout(() => {
      setGeneratedStory(`Once upon a time, there was a child named ${childName} who loved ${storyTheme}. 
      Every night, ${childName} would dream of magical adventures filled with ${storyTheme}. 
      As ${childName} closed their eyes, they could feel the warmth and comfort of their bed, 
      drifting off to a world where anything was possible...`)
      setIsGenerating(false)
      setShowAnimation(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">AI Bedtime Story Generator</CardTitle>
          <CardDescription className="text-center">Create magical sleep time stories for your little ones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name</Label>
              <Input
                id="childName"
                placeholder="Enter child's name"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storyTheme">Story Theme</Label>
              <Input
                id="storyTheme"
                placeholder="e.g., space adventure, magical forest"
                value={storyTheme}
                onChange={(e) => setStoryTheme(e.target.value)}
              />
            </div>
            <Button 
              className="w-full" 
              onClick={generateStory} 
              disabled={isGenerating || !childName || !storyTheme}
            >
              {isGenerating ? 'Generating Story...' : 'Generate Bedtime Story'}
            </Button>
          </div>
          {generatedStory && (
            <div className="mt-6 space-y-2">
              <Label>Generated Story</Label>
              <Card className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <Textarea 
                    value={generatedStory} 
                    readOnly 
                    className="min-h-[200px] resize-none"
                  />
                </CardContent>
                {showAnimation && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/70 flex items-end justify-center pb-4">
                    <div className="animate-bounce">
                      <Moon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="animate-pulse ml-2">
                      <Stars className="h-6 w-6 text-yellow-200" />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">Sweet dreams and magical stories await!</p>
        </CardFooter>
      </Card>
    </div>
  )
}