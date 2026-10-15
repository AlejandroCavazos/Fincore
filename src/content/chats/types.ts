/** A theory subtopic told as a chat with a character: challenge first, short bubbles. Spanish only. */
export type ChatStep =
  | { say: string }
  | { tip: string }
  | { ask: string; options: { text: string; ok?: boolean; reply: string }[] }

export interface ChatLesson {
  lessonId: string
  character: { name: string; emoji: string; role: string }
  /** One script per theory section, same order and count as lesson.theory. */
  sections: ChatStep[][]
}
