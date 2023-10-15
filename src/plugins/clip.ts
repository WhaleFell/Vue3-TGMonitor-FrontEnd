// src/plugins/clip.ts
import { useClipboard } from '@vueuse/core'
import { useMsg, NoticeType } from './notice'

const { isSupported, copy } = useClipboard()
export const useCopyText = (text: string) => {
  if (!isSupported) {
    useMsg(
      'not support clipboard',
      NoticeType.ERROR,
    )
  }
  copy(text)
    .then(() => {
      useMsg(`cliped!`, NoticeType.SUCCESS)
    })
    .catch((reason) => {
      useMsg(`clip error:${reason}`)
    })
}
