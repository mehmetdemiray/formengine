import {useEffect, useState} from 'react';
import marked from "marked";
import { Layout } from '../../layout';
import Changelog from './../../assets/md/changelog.md';

export const ChangelogPage = () => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    fetch(Changelog).then(res => {
      return res.text();
    }).then(text => {
      setMarkdown(marked(text));
    })
  }, [])
  return (
    <Layout>
      <section>
        <article dangerouslySetInnerHTML={{__html: markdown}}></article>
      </section>
    </Layout>
  )
}
