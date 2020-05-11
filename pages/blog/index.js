import React from "react"

export default function Layout() {
  return "Test"
}

export async function getStaticProps() {
  return {
    props: {page: {}, ogType: "website"},
  }
}
