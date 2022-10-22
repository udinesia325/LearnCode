/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
		images:{
				domains:["localhost"]
		},
		env:{
				backend:"http://localhost:4000/api"
		}
}

module.exports = nextConfig
