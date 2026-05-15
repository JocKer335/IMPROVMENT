# GNF Platform Improvement Handoff

This file saves the final platform guidance and the changes made during this chat. It is meant to be portable so the work can be moved into another chat or applied to the real GNF platform.

## Project Goal

Improve and scale the existing GNF platform without recreating it from the beginning.

The goal is to help a beginner open the platform and understand:

- What each important page is for.
- What each important movement/action does.
- When the wallet will be used.
- Where results appear after an action.
- What to do when a section is empty.

The platform should still feel like GNF. Do not turn it into a documentation page. Add short guidance only where the user may be confused.

## Active HTML Project

The current HTML project is here:

```text
C:\Users\simo\Documents\Codex\2026-05-12\files-mentioned-by-the-user-improvment
```

Main files:

```text
index.html
styles.css
script.js
improvement.md
```

The browser opens the project here:

```text
file:///C:/Users/simo/Documents/Codex/2026-05-12/files-mentioned-by-the-user-improvment/index.html
```

## Core Product Rules

- Do not rebuild the platform from scratch.
- Keep the fantasy/game visual direction.
- Use short explanation blocks, not long tutorials.
- Add instructions only where a beginner might ask what the page/action means.
- Avoid repeating the same explanation in multiple places.
- Do not say boosters are bought in the Store.
- Use Burn as platform utility, not the GNF token.
- Use "claim" where the user requested it instead of "mint".

## Store Copy

Store guide:

```text
The Store lets users buy Burn, then spend it inside the platform.
Buy Burn with SOL, then spend Burn on packs and boxes. Burn is platform utility, not the GNF token.
```

Important correction:

```text
Do not include "boosters" in the Store sentence. Boosters are won through platform reward paths, not bought directly in the Store.
```

## Inventory Copy

Main Inventory guide:

```text
The GNF Inventory - General Hub.
Everything you earn, farm, open, boost, and claim lives here. Track Burn, Leader fragments, farming packs, NFTs, boosters, wallet and socials links, recruits, and ready rewards in one place. Open packs for drops, trigger boosters, and manage your claimed packs from the hub of the platform.
```

Packs tab:

```text
These are opened for rewards. When you open one, it can drop fragments, boosters, items, Burn, or sometimes another pack/NFT reward depending on the tier. Some openings can trigger a bonus reward, like extra Leader fragments.
```

NFTs / Leader Packs tab:

```text
These are tied to the four Leader paths. You can buy limited packs from the Store or claim them by sacrificing 100 same-type fragments. Once received, they sit unopened in your Inventory until you reveal them. Revealing shows the NFT/serial or pack result.
```

Boosters tab:

```text
Boosters are timed 2x multipliers. Activate one before farming to increase fragment drops from daily gifts and mystery boxes, plus platform points while it is active.
```

Important correction:

```text
Boosters are not bought in the Store. They are won from reward paths such as farming packs / boxes and multiply platform rewards while active.
```

## Fire Wall Copy

Main Fire Wall guide:

```text
Firewall.
This is where under-floor listings are challenged. Frozen NFTs enter a 6 hour timed window: owners can defrost before expiry, or holders vote to save or burn. Every outcome is tracked here, from live votes to final results and your own voting history.
```

Running Votes tab:

```text
Live Burn or Save votes appear here. Review each frozen NFT, check the timer, and cast your vote before the window closes.
```

Results Den tab:

```text
Final vote outcomes live here. See which NFTs were saved or burned, the winning side, and the wallet that received the reborn NFT when a burn vote passes.
```

My Voting tab:

```text
Your personal voting record. Track every NFT you voted on, how you voted, and the outcome after the vote closes.
```

Defrost House tab:

```text
Your emergency exit for frozen NFTs. If one of your NFTs is caught below the protected floor, come here to defrost it before the timer expires and prevent it from entering the Burn or Save outcome.
```

Removed from Fire Wall:

```text
The "How Voting Works" card was deleted from the Fire Wall page.
```

## Sacrifice Copy

Sacrifice guide:

```text
Sacrifice.
Choose a Leader path and spend 100 matching fragments to mint an unopened NFT pack. Each Leader has a limited sacrifice supply, so once that pool is gone, that pack can only come from other platform rewards or Store paths.
```

Button correction:

```text
The card heading should say "Claim NFT Pack", and the action button should say "Sacrifice".
The process step under "2. Select Bundle" should say "Choose a bundle".
```

Claim card description:

```text
100 Flare fragments mints a Wolf Pack, 100 Shard fragments mints an Owl Pack, 100 Pulse fragments mints a Shark Pack, and 100 Snake fragments mints a Snake Pack.
```

Important meaning:

```text
Sacrifice should explain what the page is, not only the technical formation of how the platform works.
```

## Socials Copy

Socials guide:

```text
Social tasks move through review before rewards unlock.
Complete tasks, submit proof, wait for approval, then claim. Approved tasks also count toward raffle eligibility.
```

Current Socials section needs:

- Clear empty state when no tasks are available.
- Clear proof submission wording.
- Clear status labels: Available, Submitted, Approved, Claimed, Completed.
- Raffle progress should show which approved tasks count.

## Referrals Copy

Referrals guide:

```text
Referrals turn invites into milestone progress.
Share your invite code. Qualified referrals unlock Burn milestones and leaderboard progress. Connect X and Discord to claim referral rewards.
```

Recommendation:

```text
Do not publish exact referral percentages until the founder confirms the final backend rule.
```

## Recommended Empty States

Fire Wall / Running Votes:

```text
No live votes yet.
Active holder votes appear here when a frozen NFT enters the voting window.
```

Fire Wall / My Voting:

```text
No personal votes yet.
After you vote on a frozen NFT, your choice and final outcome will appear here.
```

Fire Wall / Defrost House:

```text
No defrost actions available.
If one of your NFTs is frozen below the protected floor, it will appear here while the timer is active.
```

Socials:

```text
No tasks available.
New tasks will appear here when the team opens a campaign or raffle requirement.
```

## Before Wallet Confirmation Examples

Vote:

```text
You are voting on this frozen NFT.
This uses your current vote choice.
You can still change your vote while the timer is active.
Confirm in wallet to continue.
```

Sacrifice:

```text
You are sacrificing 100 same-type Leader fragments.
This claims one unopened Leader pack into your Inventory.
Confirm in wallet to continue.
```

Defrost:

```text
You are defrosting this NFT before the timer expires.
This prevents it from entering the Burn or Save outcome.
Confirm in wallet to continue.
```

## Final Implementation Notes

- The current HTML project already contains the updated Fire Wall guidance.
- The Fire Wall "How Voting Works" card has been removed.
- The project should be copied or applied into the real app carefully, page by page.
- Keep the same structure, but replace the old unclear copy with the final copy above.
- Use this file as the source of truth for wording when moving the work into another chat.

## Completed Page Guidance Chart

| Page | Purpose | Final user guidance | Status |
|---|---|---|---|
| Inventory | Central hub for rewards, balances, packs, NFTs, boosters, wallet, socials, recruits, and claimed rewards. | Everything you earn, farm, open, boost, and claim lives here. Track Burn, Leader fragments, farming packs, NFTs, boosters, wallet and socials links, recruits, and ready rewards in one place. | Complete |
| Fire Wall | Vote and defrost area for under-floor NFT listings. | Frozen NFTs enter a 6 hour timed window: owners can defrost before expiry, or holders vote to save or burn. Every outcome is tracked here. | Complete |
| Sacrifice | Convert matching fragments into unopened Leader packs while supply remains. | Choose a Leader path and spend 100 matching fragments to mint an unopened NFT pack. Each Leader has a limited sacrifice supply. | Complete |
| Store | Buy Burn with SOL and spend Burn on platform packs and boxes. | Buy Burn with SOL, then spend Burn on packs and boxes. Burn is platform utility, not the GNF token. | Complete |
| Socials | Complete social tasks, submit proof, wait for approval, then claim rewards. | Social tasks move through review before rewards unlock. Approved tasks also count toward raffle eligibility. | Complete |
| Referrals | Share invite code, track recruits, milestones, and leaderboard progress. | Share your invite code. Qualified referrals unlock Burn milestones and leaderboard progress. Connect X and Discord to claim referral rewards. | Complete |

## Completed Action Chart

| Page | Action | Button / label | Before wallet explanation | Result location |
|---|---|---|---|---|
| Fire Wall | Vote on frozen NFT | Vote Burn / Vote Save | You are voting on this frozen NFT. You can still change your vote while the timer is active. Confirm in wallet to continue. | My Voting and Results Den |
| Fire Wall | Defrost frozen NFT | Defrost / Unfreeze NFT | You are defrosting this NFT before the timer expires. This prevents it from entering the Burn or Save outcome. | Defrost House |
| Sacrifice | Claim pack from fragments | Sacrifice | You are sacrificing 100 matching fragments to claim one unopened Leader pack. Confirm in wallet to continue. | Inventory |
| Store | Buy Burn | Buy Now | You are buying Burn with SOL. Check the amount and network fee before confirming. | GNF Balance |
| Store | Buy pack | Buy | You are buying this pack from the Store. It will appear unopened in Inventory after confirmation. | Inventory |
| Socials | Submit task proof | Submit Verification | You are submitting proof for review. Rewards unlock only after approval. | Social task status |
| Socials | Claim approved reward | Claim | You are claiming an approved social reward. The reward will be added after confirmation. | Balance or Inventory |
| Referrals | Copy invite code | Copy | No wallet needed. This copies the invite code or invite link. | Referrals page |

## Completed Fire Wall Tab Chart

| Tab | What appears here | Beginner explanation | Empty state |
|---|---|---|---|
| Running Votes | Active frozen NFTs still inside the vote window. | Review each frozen NFT, check the timer, and cast your vote before the window closes. | No live votes yet. Active holder votes appear here when a frozen NFT enters the voting window. |
| Results Den | Closed vote outcomes and winner information. | See which NFTs were saved or burned, the winning side, and the wallet that received the reborn NFT when a burn vote passes. | No final results yet. Ended votes appear here after the voting window closes. |
| My Voting | Personal vote history and latest active choice. | Track every NFT you voted on, how you voted, and the final outcome after the vote closes. | No personal votes yet. After you vote, your choice appears here. |
| Defrost House | Owner actions for frozen NFTs before expiry. | If one of your NFTs is caught below the protected floor, defrost it before the timer expires. | No defrost actions available. Eligible frozen NFTs appear here while the timer is active. |

## Completed Sacrifice Fragment Chart

| Fragment type | 100 fragments claims | Leader path | User-facing note |
|---|---|---|---|
| Flare fragments | Wolf Pack | Wolf | 100 Flare fragments mints a Wolf Pack. |
| Shard fragments | Owl Pack | Owl | 100 Shard fragments mints an Owl Pack. |
| Pulse fragments | Shark Pack | Shark | 100 Pulse fragments mints a Shark Pack. |
| Snake fragments | Snake Pack | Snake | 100 Snake fragments mints a Snake Pack. |

## Completed Inventory Chart

| Inventory tab | What it means | Final explanation | Important rule |
|---|---|---|---|
| Packs | Farming packs opened for rewards. | These are opened for rewards. They can drop fragments, boosters, items, Burn, or sometimes another pack/NFT reward depending on tier. | Do not describe these as Leader NFTs. |
| NFTs | Leader packs and revealed NFTs. | These are tied to the four Leader paths. Store packs and sacrificed packs sit unopened until reveal. | Use claim where requested, not mint. |
| Boosters | Timed 2x multipliers. | Activate one before farming to increase fragment drops from daily gifts and mystery boxes, plus platform points while active. | Do not say boosters are bought in Store. |

## Completed Store Chart

| Store area | What it sells | Correct wording | Do not say |
|---|---|---|---|
| Buy Burn | Burn balance purchased with SOL. | Buy Burn with SOL, then spend Burn on packs and boxes. | Do not call Burn the GNF token. |
| Packs | Unopened packs bought with Burn. | Store NFT packs use the store supply path and appear unopened in Inventory after purchase. | Do not say boosters are bought here. |
| Boxes | Reward containers / platform reward path. | Boxes can be part of reward paths that may produce fragments, boosters, items, or Burn depending on rules. | Do not promise rewards unless backend confirms them. |

## Completed Socials Chart

| State | Meaning | User guidance |
|---|---|---|
| Available | Task can be completed now. | Complete the task and submit proof. |
| Submitted | Proof was sent to the team. | Wait for review before claiming. |
| Approved | Proof was accepted. | Reward is ready to claim or counts toward raffle progress. |
| Claimed | Reward has been collected. | No more action needed for this task. |
| Completed | Task is finished. | It can count toward raffle eligibility when required. |

## Completed Referrals Chart

| Area | Meaning | User guidance |
|---|---|---|
| Invite code | The code/link the user shares. | Copy and share it with friends. |
| Total referrals | Number of qualified recruits. | Qualified referrals appear after they meet platform rules. |
| Burn earned | Referral milestone reward progress. | Exact percentages should stay hidden until final backend rules are confirmed. |
| Leaderboard | Referral rank position. | Shows progress compared with other inviters. |
| X and Discord | Social identity needed for referral rewards. | Connect both before claiming referral rewards. |

## Latest Live Update - 2026-05-12

This section records the latest live edits made in the `C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT` project after the original handoff.

### Sacrifice Process Panel

The Sacrifice page process card now uses four steps:

```text
1. Connect Wallet
Connect your wallet.

2. Select Bundle
Select your pack.

3.
Sacrifice 100 matching fragments.

4.
Open the sealed pack in Inventory.
```

### Store Page

Store guide now reads:

```text
Store.
Top up Burn, grab unopened farming packs, and collect limited NFT packs before they run out. Every pack you buy is sent sealed to your profile gallery, ready to open when you choose. Use the Store to fuel farming, stack rewards, and prepare for your next Sacrifice or reveal.
```

Store pack tabs now switch copy:

| Tab | Title | Description |
|---|---|---|
| Packs | Packs | Buy unopened farming packs with Burn. They stay sealed in your profile gallery until you open them for rewards like fragments, boosters, bonus drops, or other platform items. |
| NFT Packs | NFT Packs | Buy limited Leader NFT packs directly from the Store. Each Leader has a capped Store supply, and purchased packs remain unopened until you reveal them from Inventory. |

Buy Burns helper text now reads:

```text
Top up your Burn balance with SOL. Burn is the platform currency used to buy packs, NFT packs, boosters, and other Store items. It is internal to the GNF platform and is not the GNF token.
```

### Socials Page

The old empty Socials placeholder was replaced with the standalone SocialMedia project embedded inside the Socials page:

```text
C:\Users\simo\OneDrive\Bureau\codex\SocialMedia\index.html
```

The embedded SocialMedia project now has:

- Hidden duplicate header when loaded with `?embed=1`.
- Working task tabs for Available and Completed.
- Working `View Details` raffle modal.
- Working `Start` / proof submission modal.
- Embed-specific modal positioning so popups open near the clicked button instead of at the top of the iframe.
- Standalone SocialMedia navigation links fixed so Fire Wall, Sacrifice, Store, Social Tasks, and Referrals open the main IMPROVMENT sections.

### Referrals Page

Referrals guide now reads:

```text
Referrals.
Invite friends into GNF with your personal code. Every confirmed referral helps you earn Burn, climb the leaderboard, and unlock milestone rewards as your network grows.
```

Invite card copy now reads:

```text
Copy and send your code to friends. When they join GNF through your code, they count toward your referrals and reward progress.
```

Leaderboard copy now reads:

```text
See the top referrers in the GNF community. Rankings are based on confirmed referrals, so every successful invite moves you closer to the top.
```

The Referrals panel now has real tabs:

| Tab | What appears |
|---|---|
| Invite Friends | Invite code, copy link button, squad info, and leaderboard. |
| Rewards | Invite Milestones reward list and leaderboard. |

Rewards / Invite Milestones copy:

```text
Claim milestone rewards as your referral count grows. Each completed invite target unlocks more Burn for your account.
```

Referral milestones currently shown:

| Milestone | Center reward text | State |
|---|---|---|
| Invite 1 Friend | 50 Burn | Claimed |
| Invite 2 Friends | 100 Burn | Claimed |
| Invite 3 Friends | 200 Burn | 2/3 progress |
| Invite 4 Friends | 400 Burn | 2/4 progress |
| Invite 5 Friends | 1000 Burn | 2/5 progress |

The `Invite Milestones` heading is centered. Each row keeps the invite target on the left, moves the reward text into the center of the row, and keeps the claimed/progress state on the right.

Latest layout polish centers the Referrals guide banner copy, gives milestone rewards a fixed center column, and gives leaderboard pack art a dedicated centered image lane between the player name and referral count.

Latest leaderboard note appears in both Referrals tabs. The `Leaderboard` title is centered, with a small `?` mark beside it. The visible page paragraph stays:

```text
Top 200 allocation to the token and the top 4 of the pack get the 4 of the Leader Pack NFTs.
```

The blue `?` hover/focus text reads:

```text
See the top referrers in the GNF community. Rankings are based on confirmed referrals, so every successful invite moves you closer to the top.
```

The note is shown from the `?` mark on hover/focus using `.leaderboard-heading` and `.leaderboard-info-mark`, while `.leaderboard-copy` keeps the visible paragraph in its original place. The main stylesheet is versioned in `index.html` so the live site loads the updated mark styles.

The hover text is styled as a compact blue paragraph box with normal sentence casing and wrapping, so it does not stretch across the page.

Leaderboard rows now show the existing `SocialMedia/epic-pack.png` pack image in the centered slot between the player name and referral count.

### Files Changed In Latest Pass

```text
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\index.html
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\styles.css
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\script.js
C:\Users\simo\OneDrive\Bureau\codex\SocialMedia\index.html
C:\Users\simo\OneDrive\Bureau\codex\SocialMedia\styles.css
```

## Latest Live Update - 2026-05-15

This section records the latest Referrals page polish and final positioning decisions.

### Referrals Guide Banner

The top Referrals guide banner is centered and polished:

- `Referrals.` title is centered.
- Guide copy is centered under the title.
- The banner uses a warmer parchment gradient treatment.
- The stylesheet cache-bust is updated in `index.html` so the live website loads the new styling.

### Invite Milestones

The Invite Milestones section now uses a cleaner three-column row layout:

| Left | Center | Right |
|---|---|---|
| Invite target | Burn amount | Claimed / progress |

Visible milestone rows:

| Milestone | Center amount | State |
|---|---|---|
| Invite 1 Friend | 50 Burn | Claimed |
| Invite 2 Friends | 100 Burn | Claimed |
| Invite 3 Friends | 200 Burn | 2/3 progress |
| Invite 4 Friends | 400 Burn | 2/4 progress |
| Invite 5 Friends | 1000 Burn | 2/5 progress |

Important final rule:

```text
Do not show the word "Reward:" before the Burn amount.
```

### Leaderboard

Leaderboard rows now include the existing pack image:

```text
SocialMedia/epic-pack.png
```

The row layout is:

| Left | Name | Center image | Right |
|---|---|---|---|
| Rank | Player name | Epic pack image | Referral count |

The pack image is centered in a dedicated image lane between the player name and referral count.

Visible leaderboard rows now include:

| Rank | Name | Referral count |
|---|---|---|
| #1 | Survivor | 3 referrals |
| #2 | jocker | 2 referrals |
| #3 | tommyg | 1 referrals |
| #4 | Raven | 1 referral |

There is a small added gap between the `Top 200 allocation...` paragraph and the leaderboard rows.

### Leaderboard Copy And Tooltip

Visible leaderboard paragraph stays:

```text
Top 200 allocation to the token and the top 4 of the pack get the 4 of the Leader Pack NFTs.
```

The `?` hover tooltip text reads:

```text
See the top referrers in the GNF community. Rankings are based on confirmed referrals, so every successful invite moves you closer to the top.
```

The tooltip is styled as a compact blue paragraph box with normal sentence casing and clean wrapping.

### Files Updated In This Pass

```text
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\index.html
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\styles.css
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\improvements.md
```

## Latest Live Update - 2026-05-13

This section records the next pass of live edits made after the 2026-05-12 handoff update.

### Socials Top Guide

The Socials page now has a Store-style guide block above the embedded SocialMedia project:

```text
Socials.
Complete social tasks, submit proof, earn fragments, Burn, packs, and raffle access. Every approved action moves you closer to rewards, Leader packs, and stronger platform standing.
```

### SocialMedia Task Explanation

The task explanation panel inside the embedded SocialMedia project now reads:

```text
Tasks are the daily action board of GNF.
Like, comment, retweet, join, or complete platform missions, then submit proof for review. Once approved, claim your reward and keep building your fragment, Burn, or pack balance.
```

The small `How tasks work` label above this panel was removed.

### SocialMedia Raffle Copy

The main Raffle notice now reads:

```text
Raffles are reward gates unlocked through approved tasks. Complete the required task path, meet the approved-task threshold of 10, and enter for a chance to win fragments, Burn, packs, or NFT rewards.
```

Active Raffles copy now reads:

```text
Live raffle entries appear here. Check the eligibility path, complete the required tasks, and participate once your progress unlocks entry.
```

Raffle History copy now reads:

```text
Past raffles and outcomes live here. Review completed draws, previous entries, winners, and claimed rewards.
```

### SocialMedia Embed Layout Fix

The embedded SocialMedia task board was adjusted so users can access hidden information:

- Embedded task cards now wrap into two columns instead of pushing content off-screen.
- On smaller screens, task cards collapse to one column.
- `Start`, `Claim`, and `Review` buttons move under the reward information in embedded mode so they do not cover text.
- The embedded iframe height was increased so wrapped SocialMedia content remains reachable.
- The iframe cache-bust version is now `?embed=1&v=6`.

### Files Updated In This Pass

```text
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\index.html
C:\Users\simo\OneDrive\Bureau\codex\IMPROVMENT\styles.css
C:\Users\simo\OneDrive\Bureau\codex\SocialMedia\index.html
C:\Users\simo\OneDrive\Bureau\codex\SocialMedia\styles.css
```
