import React, { useState } from 'react'

import {
    Wrapper,
    Container,
    Form,
    Input,
    Submit,
    InputContainer,
    Alert,
    Text,
    StatsHeadingText,
    StatsContainer,
    Ribbon,
    UrlContainer,
    AlertContainer

} from './MainStyles'
import { fetchUrl } from '../../api'

import Stats from './stats'
import brandLogo from '../../images/icon-brand-recognition.svg';
import detailedLogo from '../../images/icon-fully-customizable.svg';
import FullyCustomizableLogo from '../../images/icon-detailed-records.svg';
import UrlItem from './UrlItem';



const statData = [
    {
        id: 1,
        heading: 'brandRecognition',
        content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        image: brandLogo
    },
    {
        id: 2,
        heading: "Detailed Reports",
        content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        image: detailedLogo
    },
    {
        id: 3,
        heading: "Fully Customizable",
        content: "Improve brand awareness and content discoverability through customizable links, supercharching audience engagement.",
        image: FullyCustomizableLogo
    },

];



const MainSection = () => {
    const [url, setUrl] = useState("")
    const [urls, setUrls] = useState([])
    const [alert, setAlert] = useState({ err: '' })
    const [isLoading, setIsLoading] = useState(false)


    const getLink = async () => {
        setIsLoading(true);
        const { data } = await fetchUrl(url);
        setUrls([...urls, data?.result])
        setIsLoading(false);

    }

    const error = (err) => {
        setAlert({ err })
        setTimeout(() => (
            setAlert({ err: '' })
        ), 3000)
        setUrl('')
    }

    const existingLink = (url) => {
        if (urls.length === 0) {
            setUrl('')
            getLink();
        } else {
            urls.find(item => {
                if (item.original_link.split('#')[0] === url.split('#')[0]) {
                    return error('You already shortened this link')
                } else {
                    setUrl('')
                   return getLink();
                }
            })

        }

    }

    const handleSubmit = (e, url) => {
        e.preventDefault();

        if (!url) {
            error('Please add a link');

        } else if (!url.includes("https") && !url.includes("www") && !url.includes("http")) {
            error('Please enter a valid url')
        } else {
            existingLink(url);
        }
    }
    return (
        <Wrapper>
            <Container>
                <Form onSubmit={(e) => handleSubmit(e, url)}>
                    <InputContainer >
                        <Input type="text" className={alert.err && "active"} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Shorten a link here..." />
                        <AlertContainer>
                            {
                                alert.err === '' ? null : <Alert >{alert.err}</Alert>
                            }
                        </AlertContainer>


                    </InputContainer>
                    <Submit primary type="submit">Shorten It!</Submit>
                </Form>

                <UrlContainer>
                    {
                        isLoading && <p style={{ marginBottom: '10px', fontSize: '1.3rem' }}>Please wait...</p>
                    }

                    {
                        urls?.map((url, index) => {
                            return (
                                <UrlItem
                                    key={index}
                                    originalLink={url.original_link}
                                    shortedLink={url.full_short_link2}
                                />
                            )
                        })
                    }
                </UrlContainer>


                <StatsHeadingText>
                    <Text h2>
                        Advanced Statistics
                    </Text>
                    <Text p>
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </Text>
                </StatsHeadingText>

                <StatsContainer>
                    {
                        statData.map(item => {
                            return (
                                <Stats
                                    key={item.id}
                                    heading={item.heading}
                                    content={item.content}
                                    image={item.image}
                                />
                            )
                        })
                    }
                    <Ribbon />
                </StatsContainer>
            </Container>
        </Wrapper>
    )
}



export default MainSection
