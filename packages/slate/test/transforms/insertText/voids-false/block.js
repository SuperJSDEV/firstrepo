/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block void>word</block>
  </editor>
)

export const run = editor => {
  Editor.insertText(editor, 'x', { at: [0] })
}

export const output = (
  <editor>
    <block void>word</block>
  </editor>
)
