FROM mcr.microsoft.com/playwright:v1.17.1-focal

# Set the working directory
WORKDIR /usr/src/app

ENV BITHEAP_USERNAME playwright
ENV PASS playwright

# Copy your test scripts and package.json to the container
COPY . .

# Install dependencies including Playwright packages
RUN npm install
RUN npx playwright install

# Run the tests when the container starts
CMD ["npx", "playwright", "test"]
