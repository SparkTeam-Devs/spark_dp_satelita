import type { NextConfig } from "next";

const nextConfig: NextConfig = {

	images: {
		unoptimized: true,
	},

  	sassOptions: {
		additionalData: `@import "src/styles/_mixins.scss"; @import "src/styles/_fonts.scss";  @import "src/styles/_media.scss";`,
	},
	webpack(config) {

		
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],

		});

		return config
	},
};

export default nextConfig;
