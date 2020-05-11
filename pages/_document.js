import React from "react"
import NextDocument, {Head, Main, NextScript} from "next/document"

export default class Document extends NextDocument {
  render () {
    return <html prefix="og: http://ogp.me/ns#" lang="ru">
      <Head/>
      <body>
        <Main/>
        <div id="modal"/>
        <NextScript/>
      </body>
    </html>
  }
}
