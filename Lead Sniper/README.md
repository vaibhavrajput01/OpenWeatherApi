# Lead Sniper Workflow (n8n)

## Overview
This workflow monitors GitHub stargazers and identifies high-value leads based on their activity and influence.

## Workflow Description
1. A Schedule Trigger runs every hour to poll new stargazers.
2. The GitHub API fetches stargazers of a repository.
3. Each user's profile is retrieved using the /users/{username} endpoint.
4. Users are filtered as High-Value Leads if:
   - Followers > 100 OR
   - Public repositories > 50
5. An AI-based logic generates a personalized outreach pitch using the user's bio and company.
6. The output is sent to a Discord channel via webhook.

## Tools Used
- n8n (workflow automation)
- GitHub API
- Discord Webhook

## Output
The workflow sends a formatted message to Discord containing:
- Name
- Company
- Bio
- AI-generated pitch