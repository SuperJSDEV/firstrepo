
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'

import CheckLists from './check-lists'
import CodeHighlighting from './code-highlighting'
import Embeds from './embeds'
import Emojis from './emojis'
import ForcedLayout from './forced-layout'
import HoveringMenu from './hovering-menu'
import HugeDocument from './huge-document'
import Images from './images'
import Links from './links'
import MarkdownPreview from './markdown-preview'
import MarkdownShortcuts from './markdown-shortcuts'
import PasteHtml from './paste-html'
import PlainText from './plain-text'
import Plugins from './plugins'
import RTL from './rtl'
import ReadOnly from './read-only'
import RichText from './rich-text'
import SearchHighlighting from './search-highlighting'
import Tables from './tables'

/**
 * Examples.
 *
 * @type {Array}
 */

const EXAMPLES = [
  ['Rich Text', RichText, '/rich-text'],
  ['Plain Text', PlainText, '/plain-text'],
  ['Hovering Menu', HoveringMenu, '/hovering-menu'],
  ['Links', Links, '/links'],
  ['Images', Images, '/images'],
  ['Embeds', Embeds, '/embeds'],
  ['Emojis', Emojis, '/emojis'],
  ['Markdown Preview', MarkdownPreview, '/markdown-preview'],
  ['Markdown Shortcuts', MarkdownShortcuts, '/markdown-shortcuts'],
  ['Check Lists', CheckLists, '/check-lists'],
  ['Code Highlighting', CodeHighlighting, '/code-highlighting'],
  ['Tables', Tables, '/tables'],
  ['Paste HTML', PasteHtml, '/paste-html'],
  ['Search Highlighting', SearchHighlighting, '/search-highlighting'],
  ['Read-only', ReadOnly, '/read-only'],
  ['RTL', RTL, '/rtl'],
  ['Plugins', Plugins, '/plugins'],
  ['Forced Layout', ForcedLayout, '/forced-layout'],
  ['Huge', HugeDocument, '/huge-document'],
]

/**
 * App.
 *
 * @type {Component}
 */

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="nav">
          <span className="nav-title">Slate Examples</span>
          <div className="nav-links">
            <a className="nav-link" href="https://github.com/ianstormtaylor/slate">GitHub</a>
            <a className="nav-link" href="https://docs.slatejs.org/">Docs</a>
          </div>
        </div>
        <div className="tabs">
          {EXAMPLES.map(([ name, Component, path ]) => (
            <NavLink key={path} to={path} className="tab"activeClassName="active">
              {name}
            </NavLink>
          ))}
        </div>
        <div className="example">
          <Switch>
            {EXAMPLES.map(([ name, Component, path ]) => (
              <Route key={path} path={path} component={Component} />
            ))}
            <Redirect from="/" to="/rich-text" />
          </Switch>
        </div>
      </div>
    )
  }

}

/**
 * Router.
 *
 * @type {Element} router
 */

const router = <HashRouter><App /></HashRouter>

/**
 * Mount the router.
 */

const root = document.body.querySelector('main')
ReactDOM.render(router, root)
