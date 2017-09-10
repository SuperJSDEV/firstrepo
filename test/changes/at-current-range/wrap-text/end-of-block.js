/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  change.wrapText('[[', ']]')
}

export const input = (
  <state>
    <document>
      <paragraph>
        wo<anchor />rd<focus />
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        wo[[<anchor />rd<focus />]]
      </paragraph>
    </document>
  </state>
)
