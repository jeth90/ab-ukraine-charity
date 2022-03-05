// const isProd = process.env.NODE_ENV === 'production'

module.exports = {   
    env: {      
        // BACKEND_URL : isProd ? '' : 'http://localhost:8001'
    },
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    
    // images: {
    //   loader: 'imgix',
    //   path: 'http://localhost:8001/',
    // },
    webpack(config) {
        config.module.rules.push({
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: [
            {
            loader: '@svgr/webpack',
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: { plugins: [{ removeViewBox: false }] },
                titleProp: true,
            },
            },
        ],
        });
        return config;
    },
}
