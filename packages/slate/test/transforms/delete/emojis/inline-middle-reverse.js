/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.delete(editor, { unit: 'character', reverse: true })
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>
        wor📛
        <cursor />d
      </inline>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline>
        wor
        <cursor />d
      </inline>
      <text />
    </block>
  </editor>
)
