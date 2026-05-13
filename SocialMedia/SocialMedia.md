# SocialMedia Project

## Purpose

`SocialMedia` is the current GNF social tasks and raffles page. It is built as a polished, readable front-end mockup for users to complete social tasks, submit proof, enter raffles, and claim approved rewards.

## Project Files

- `index.html` - page structure and modal behavior
- `styles.css` - full visual design and responsive layout
- `server.mjs` - local static server
- `SocialMedia.md` - project notes
- `fonts.html` - optional font preview page
- `assets/epic-pack.png` - Epic Pack thumbnail used on task cards

## Current Page Structure

1. Top navigation and balance bar
2. `Tasks`
3. Available and completed task tabs
4. `Raffle`
5. Approved reward claim cards
6. Active raffle cards
7. Raffle history
8. View Details modal
9. Task Verification modal

## Tasks

The task section is controlled by the segmented tabs:

```text
Available | Completed
```

The tab control sits above the tasks panel. The task refresh button is shown inside the tasks section, aligned in its own row under the compact task workflow information, and uses the same subdued pill style as `Refresh Raffles`.

Available tasks show:

- `Like + Retweet` - Unclaimed - `+20 Owl Fragment` with a compact claim button
- `Add` - Unclaimed - `+30 Snake Fragment` with a compact claim button
- `Comment` - Unclaimed - `+1 Epic Pack` with a compact claim button and the real Epic Pack thumbnail
- `Like + Retweet` - Not Started - `+20 Owl Fragment` with a start button
- `Add` - Pending - `+30 Snake Fragment` with a review button
- `Comment` - Claim - `+1 Epic Pack` with a claim button and the real Epic Pack thumbnail

The top row shows the approved-by-team state: the reward is ready, but the user has not claimed it yet. The second row keeps the previous task-state examples. Completed tasks are separated into the completed tab only.

## Typography

- Big titles, task names, and primary display text use `Share Tech Mono`.
- Smaller explanatory text, labels, and body copy use `Chakra Petch`.
- The experimental font switcher is hidden from the main page so design changes can be reviewed cleanly.

## Task Visuals

- Task cards use a Twitter / X-style circular `X` badge.
- Epic Pack task rewards use the exact `assets/epic-pack.png` screenshot as a small thumbnail under the `+1 Epic Pack` reward.

## Raffle

The raffle area shows the approval threshold and the reward flow. The title is centered as:

```text
Raffle
```

The raffle unlock note sits directly under the title. The old one-line explanation under the title is removed, and the duplicate notice below the progress bar is removed.

Current raffle notice text:

```text
Finish at least 10 approved tasks, or all active tasks when fewer are available, and complete each raffle's required task to participate.
```

The `Eligibility check active` badge is removed from the raffle header.

The old simple progress bar is replaced with a visual raffle path:

- 6 Twitter / X nodes
- 1 Discord node
- 1 raffle trophy endpoint

Completed nodes show an approval check, and the final endpoint uses the raffle trophy style.

Active raffle examples:

- `Owl Pack Draw` - `Locked - 4/10 tasks approved`
- `Owl Vault Draw` - `Ready - 10/10 tasks approved`

The visible raffle-card nameplate titles are removed. The locked raffle keeps a yellow thunder mark beside the approval pill and does not show a participate button. The ready raffle shows a `Participate` button only after the required task is complete. Clicking `Participate` changes the raffle into `Entered - 10/10 tasks approved`, updates participants from `0 users` to `1 user`, hides the participate button, and keeps the green confirmation mark beside the approval pill.

## Rewards

Approved reward claims are shown as large two-column cards:

- `1x Wolf Fragment`
- `1x Owl Fragment`

Each card shows only the reward name, approval state, and `Claim Reward` button. The old `Prize` label and `Draw: 2026` line are intentionally removed.

## Removed From Current Design

- Hero intro block
- `Step 1 - Task Proof`
- `Step 2 - Raffle Entry`
- `Updated just now` labels
- Raffle subtitle line under the title
- Duplicate raffle unlock note below the progress bar
- Extra completed-task wrapper title
- Reward-card `Prize` labels
- Reward-card `Draw: 2026` labels
- Raffle side rails for `Locked` and `Entered`
- Pending-card `Review` button from the approved claim layout
- Visible raffle-card title text inside the active raffle cards
- View Details checklist row
- Raffle header `Eligibility check active` badge
- Visible font picker on the main page

## Visual Rules

- Keep titles centered and readable.
- Use the Twitter / X-style task mark on task cards.
- For approved tasks, use the blue card style with a gold `Unclaimed` chip and compact `Claim` button.
- Keep completed tasks in one consistent teal finish.
- Keep reward cards large and direct.
- Keep completed tasks separate from available tasks.
- Keep the page focused on the real platform workflow, with no extra marketing hero.
