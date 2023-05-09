import styled from 'styled-components'

export const Title = styled.h1`
    font-family: sans-serif;
    color: #3a2d33;
    font-size: 3rem;
    margin-top: 5px;
    font-weight: bold;

    span {
        color: #a2ad91;
        display: block;
        font-size:2rem;
        text-align: center;
        font-weight: bold;
    }
`
export const Subtitle = styled(Title)`
    color: #CB8A71;
    font-size: 1.8rem;
    margin-top: 20px;
`

export const Item = styled.li`
    font-size: 1rem;
    font-family: sans-serif;
    color: #3a2d33;
    margin-top: 5px;

`

export const Btn = styled.div`
    display: flex;
    justify-content: center;
`
export const Bio = styled.h3`
    text-align: center;
    color: #3a2d33;
    margin-top: 5px;
    font-size: 1rem;
    font-family: sans-serif;
    font-style: italic;
`