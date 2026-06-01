# GNF Platform Instruction Layer

Use this structure across the platform, but only where the user needs help understanding an action.

Do not add long explanations to every card. Add guidance only when the user might ask:

- What is this page for?
- What happens if I click this?
- Will this open my wallet?
- Can I undo this?
- Where do I see the result?
- What should I do if there is nothing here?

## 1. Page Intro

Use one short explanation at the top of complex pages.

### Fire Wall

> FIREWALL is the asset-level floor enforcement protocol. FIREWALL freezes under-floor listings automatically. The owner has 6 hours to defreeze. If unresolved, holders vote for 12 hours: Burn or Forgive.

### Sacrifice

> Sacrifice is where fragments become Leader packs. Choose your Leader path, use the matching fragments, and create a pack from that Leader pool.

### Store

> Buy Burn with SOL, then spend Burn on packs and boxes. Burn is platform utility, not the GNF token.

### Socials

> Complete tasks, submit proof, wait for approval, then claim. Approved tasks also count toward raffle eligibility.

### Referrals

> Share your invite code. Qualified referrals unlock Burn, Reward Packs, leaderboard progress, and claimable milestone rewards. The Rewards tab should show compact milestone cards with Claim/Locked buttons, progress counts, and reward chips.

### Inventory

> The GNF Inventory - General Hub. Everything you earn, farm, open, boost, and claim lives here. Track Burn, Leader fragments, farming packs, NFTs, boosters, wallet and socials links, recruits, and ready rewards in one place. Open packs for drops, trigger boosters, and manage your claimed packs from the hub of the platform.

## 2. Button Explanation Before Wallet

Before opening the wallet, show a small confirmation modal inside the app.

### Fire Wall - Vote Burn

> You are voting Burn on NFT #0000.  
> This will use 1 energy.  
> You can still change your vote while the timer is active.  
> Confirm in wallet to continue.

### Fire Wall - Vote Forgive

> You are voting Forgive on NFT #0000.  
> This will use 1 energy.  
> You can still change your vote while the timer is active.  
> Confirm in wallet to continue.

### Fire Wall - Increase Energy / Defrost House

> You are using Defrost House before the timer ends.  
> This can increase energy or resolve the freeze, depending on the NFT state.  
> Confirm in wallet to continue.

### Sacrifice - Mint NFT Pack

> You are exchanging 100 Leader fragments for 1 unopened Leader pack.  
> Your fragments are used after confirmation.  
> Confirm in wallet to continue.

### Store - Buy Burns

> You are buying Burn with SOL.  
> Check the amount and network fee before confirming.  
> Confirm in wallet to continue.

### Store - Buy Pack

> You are buying this pack from the store.  
> It will appear in your inventory after the transaction confirms.  
> Confirm in wallet to continue.

### Socials - Claim Reward

> You are claiming an approved social reward.  
> The reward will be added to your platform balance or inventory after confirmation.  
> Confirm in wallet to continue.

## 3. Empty States That Teach

Empty pages should explain what is happening and what the user can do next.

### Fire Wall - Running Votes Empty

> Active holder votes appear here.

### Fire Wall - Results Den Empty

> Final Burn or Forgive outcomes appear here after voting ends.

### Fire Wall - My Voting Empty

> Your own votes appear here so you can check your latest choice.

### Fire Wall - Defrost House Empty

> Owners use this area to defreeze or increase energy before the timer ends.

### Socials - Tasks Empty

> There are no social tasks available right now. Check back when the next campaign starts. Approved previous tasks still count toward raffle eligibility.

### Store - Inventory Empty

> You do not own any packs yet. Buy a pack from the Store, open boxes, or earn rewards through platform activity.

### Referrals - Reward Milestones

> Milestone rewards appear as compact cards. Show the invite requirement, Claim or Locked button, progress bar with count, and reward chips for Burn, Common, Rare, Epic, Legendary, Mythic, and Top Referrer Badge where applicable.
### Referrals - No Referrals

> No referrals yet. Copy your invite link and share it with friends. Qualified referrals will appear here.

## 4. Result Messages After Action

After the user acts, show a clear result.

### Fire Wall

- `Vote submitted. You can see it in My Voting.`
- `Vote changed. Your latest choice is now active.`
- `Defrost action confirmed. Check Defrost House or My Voting for the latest state.`
- `Transaction failed. Nothing changed. Try again.`

### Sacrifice

- `Mint started. Waiting for wallet confirmation.`
- `NFT pack minted. Check your inventory.`
- `Mint failed. Your fragments were not used.`

### Store

- `Purchase started. Waiting for wallet confirmation.`
- `Purchase complete. Your item was added to inventory.`
- `Purchase failed. Your balance was not changed.`

### Socials

- `Proof submitted. The team will review it.`
- `Reward claimed. Your balance was updated.`
- `Proof rejected. Check the reason and resubmit.`

### Referrals

- `Invite link copied.`
- `Referral qualified. Your milestone progress was updated.`
- `Referral blocked. Duplicate or self-referral detected.`
- `Reward unlocked. Claim is now available on the referral milestone card.`

## 5. Tooltip Words

Use small info icons only for special GNF words.

### Fire Wall

- `Burn` - Vote to burn this NFT when the timer ends.
- `Forgive` - Vote to save this NFT from being burned.
- `Energy` - Power used by the Defrost House flow while the timer is active.
- `Results Den` - Where final vote results appear.
- `My Voting` - Your own vote history.
- `Defrost House` - Where owners act before the timer ends.

### Store

- `Burns` - Platform utility balance used to buy packs and boxes.
- `Frags` - Fragment balance earned or used for packs.

### Inventory

- `Booster` - Box-won multiplier that doubles platform rewards while active.
- `Pack` - Unopened collectible container that can later reveal an NFT.
- `Fragment` - Leader-specific progress item used for Sacrifice.

### Socials

- `Approved` - The team accepted your submitted proof.
- `Pending Review` - Your proof is waiting for team review.
- `Claimable` - Your reward is approved and ready to claim.

## 6. Rule For Where To Add Instructions

Add instruction if:

- The action opens the wallet.
- The action spends Burns, Frags, SOL, or energy.
- The action changes vote state.
- The page can be empty.
- The word is GNF-specific.

Do not add instruction if:

- The button is obvious, like Dashboard or Copy.
- The card is only displaying information.
- The page already has a clear next action.
