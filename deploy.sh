#!/bin/bash
cd gatsby-starter-blog-Prometheus-Blog
yarn build
cd ../Prometheus-Website-main
yarn build
# rm -rf ../gatsby-starter-blog-Prometheus-Blog/public/cra
mv build ../gatsby-starter-blog-Prometheus-Blog/public/cra
cd ../gatsby-starter-blog-Prometheus-Blog
cp ../_redirects public/
# netlify deploy --dir=public --prod
./deploy