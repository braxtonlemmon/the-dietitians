import React from 'react'
import {graphql, HeadFC, PageProps} from 'gatsby'
import SEO from '../components/SEO'
import z from 'zod'
import styled from 'styled-components'
import {DividerLine, Title} from '../shared'
import Layout from '../components/layout'

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0px 100px 50px 100px;
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0 25px 50px 25px;
    width: 100%;
  }
`

const ShowNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
`

const ShowNoteTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`

const Divider = styled(DividerLine)`
  width: 100%;
`

const PodcastPageSchema = z.object({
  allSanityShowNote: z.object({
    edges: z.array(
      z.object({
        node: z.object({
          closingLine: z.string().nullable(),
          _id: z.string(),
          link: z.string(),
          summary: z.string(),
          title: z.string(),
          episodeNumber: z.number(),
          topicsCovered: z.array(z.string().optional()),
        }),
      })
    ),
  }),
})

const PodcastPage: React.FC<PageProps> = ({data}) => {
  const parsedData = PodcastPageSchema.parse(data)
  const showNotes = parsedData.allSanityShowNote.edges.map((edge) => edge.node)
  const showNotesSorted = showNotes.sort(
    (a, b) => b.episodeNumber - a.episodeNumber
  )
  function extractEpisodeId(url: string) {
    const match = url.match(/episode\/([a-zA-Z0-9]+)(?=\?|$)/)
    return match ? match[1] : null
  }

  return (
    <Layout>
      <ContentWrapper>
        <Title>The Komplete Nutrition Podcast</Title>
        {showNotesSorted.map((note) => {
          const spotifyEpisodeId = extractEpisodeId(note.link)
          const displayTitle = `Episode ${note.episodeNumber} - ${note.title}`
          return (
            <ShowNote key={note._id}>
              <ShowNoteTitle>{displayTitle}</ShowNoteTitle>
              <p>{note.summary}</p>
              {note.topicsCovered.length > 0 && (
                <>
                  <p>Topics covered:</p>
                  <ul>
                    {note.topicsCovered.map((topic) => (
                      <li key={topic}>✓ {topic}</li>
                    ))}
                  </ul>
                </>
              )}
              {note.closingLine && <p>{note.closingLine}</p>}
              {spotifyEpisodeId && (
                <div style={{maxWidth: '500px'}}>
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${spotifyEpisodeId}?utm_source=generator`}
                    width="100%"
                    height="200"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              )}
              <Divider />
            </ShowNote>
          )
        })}
      </ContentWrapper>
    </Layout>
  )
}

export default PodcastPage

export const Head: HeadFC = () => (
  <SEO
    title="Komplete Nutrition podcast"
    description="nutrition counseling, medical nutrition therapy, diabetes"
  />
)

export const query = graphql`
  query PodcastPageQuery {
    allSanityShowNote(sort: {title: ASC}) {
      edges {
        node {
          closingLine
          _id
          link
          summary
          episodeNumber
          title
          topicsCovered
        }
      }
    }
  }
`
