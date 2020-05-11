import React from "react"

export default function Layout() {
  return "Test"
}

export async function getStaticProps({params}) {
  return {
    props: {page: {}, ogType: "website"},
  }
}

export async function getStaticPaths() {
  // let pages = [
  //    {url: "/"},
  //    {url: "/blog"},
  // ]
  // console.log(pages)
  return {
    paths: [], // pages.map(page => page.url),
    fallback: true,
  }
}
