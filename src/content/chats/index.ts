import type { ChatLesson } from './types'
import { chatL116 } from './L1-16'

export type { ChatLesson, ChatStep } from './types'
const CHATS: ChatLesson[] = [chatL116]
export const chatFor = (lessonId: string) => CHATS.find((c) => c.lessonId === lessonId)
export const allChats = () => CHATS
