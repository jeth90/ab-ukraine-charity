import Head from 'next/head'

const Meta = ({ title }) => {
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

            <title>{ title }</title>
            <meta name="msapplication-TileColor" content="#da532c" />
		    <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default Meta
