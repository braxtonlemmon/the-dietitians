import styled from 'styled-components'

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 15px;
`

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
`

const TextBlock = styled.p`
  margin-bottom: 15px;
  line-height: 22px;
`

const Button = styled.button<{
  type:
    | 'primaryFilled'
    | 'secondaryFilled'
    | 'primaryOutline'
    | 'secondaryOutline'
}>`
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 25px;
  width: max-content;
  text-transform: uppercase;
  font-weight: bold;
  border: ${(props) =>
    props.type === 'primaryOutline'
      ? `2px solid ${props.theme.colors.one}`
      : props.type === 'secondaryOutline'
      ? `2px solid ${props.theme.colors.two}`
      : 'none'};
  background: ${(props) =>
    props.type === 'primaryFilled'
      ? props.theme.colors.two
      : props.type === 'secondaryFilled'
      ? props.theme.colors.three
      : '#fff'};
  color: ${(props) =>
    props.type === 'primaryOutline'
      ? props.theme.colors.one
      : props.type === 'secondaryOutline'
      ? props.theme.colors.two
      : props.type === 'secondaryFilled'
      ? props.theme.colors.one
      : '#fff'};
`

export {SectionWrapper, Title, TextBlock, Button}
