# GNF Protocol Image Structure

Source folder:

```text
C:\Users\simo\OneDrive\Bureau\protocol
```

The current image folders describe three Fire Wall protocol flows:

- `burn` - user votes Burn, confirms wallet transaction, then sees results/claim states.
- `forgive` - user votes Forgive / unfreezes a vote state.
- `unfrez` - external marketplace/listing or unfreeze confirmation flow.

## Recommended Folder Names

```text
protocol/
  fire-wall-burn/
  fire-wall-forgive/
  fire-wall-unfreeze/
```

Rename `unfrez` to `fire-wall-unfreeze` because `unfrez` is easy to misunderstand.

## Burn Flow

Current folder:

```text
protocol/burn
```

Recommended structure:

```text
fire-wall-burn/
  burn-01-wallet-confirm-transaction.png
  burn-02-running-votes-after-vote.png
  burn-03-running-votes-select-action.png
  burn-04-result-card-reveal-button.png
  burn-05-results-den-wallet-confirm.png
  burn-06-results-den-claim-ready.png
  burn-07-wallet-unsafe-warning.png
  burn-08-my-voting-wallet-confirm.png
  burn-09-wallet-nft-selection.png
```

Rename map:

| Current file | New file name | Meaning |
|---|---|---|
| `burn 1.png` | `burn-01-wallet-confirm-transaction.png` | Wallet confirmation after Burn action |
| `2.png` | `burn-02-running-votes-after-vote.png` | Running Votes after user has voted |
| `3.png` | `burn-03-running-votes-select-action.png` | Vote Burn / Vote Forgive action cards |
| `4.png` | `burn-04-result-card-reveal-button.png` | Result card with Reveal action |
| `5.png` | `burn-05-results-den-wallet-confirm.png` | Results Den claim/reveal with wallet confirmation |
| `6.png` | `burn-06-results-den-claim-ready.png` | Results Den winner + claim ready |
| `7.png` | `burn-07-wallet-unsafe-warning.png` | Wallet unsafe warning before confirmation |
| `8.png` | `burn-08-my-voting-wallet-confirm.png` | My Voting confirm transaction state |
| `nft in the wallet.png` | `burn-09-wallet-nft-selection.png` | Wallet NFT selection/grid |

## Forgive Flow

Current folder:

```text
protocol/forgive
```

Recommended structure:

```text
fire-wall-forgive/
  forgive-01-running-votes-after-vote.png
  forgive-02-running-votes-select-action.png
  forgive-03-result-card-unfreeze-button.png
  forgive-04-results-den-wallet-confirm.png
  forgive-05-my-voting-wallet-confirm.png
```

Rename map:

| Current file | New file name | Meaning |
|---|---|---|
| `forgive 1.png` | `forgive-01-running-votes-after-vote.png` | Running Votes after Burn/Forgive state |
| `2.png` | `forgive-02-running-votes-select-action.png` | Vote Burn / Vote Forgive cards |
| `3.png` | `forgive-03-result-card-unfreeze-button.png` | Result card with Unfreeze action |
| `4.png` | `forgive-04-results-den-wallet-confirm.png` | Results Den unfreeze confirm transaction |
| `5.png` | `forgive-05-my-voting-wallet-confirm.png` | My Voting confirm transaction state |

## Unfreeze / Marketplace Flow

Current folder:

```text
protocol/unfrez
```

Recommended structure:

```text
fire-wall-unfreeze/
  unfreeze-01-marketplace-listing-wallet-confirm.png
  unfreeze-02-fire-wall-unfreeze-wallet-warning.png
  unfreeze-03-marketplace-listed-nft-card.png
```

Rename map:

| Current file | New file name | Meaning |
|---|---|---|
| `etap 1.png` | `unfreeze-01-marketplace-listing-wallet-confirm.png` | Magic Eden listing modal and wallet confirmation |
| `etap 2.png` | `unfreeze-02-fire-wall-unfreeze-wallet-warning.png` | Fire Wall unfreeze action with unsafe wallet warning |
| `how iis it look.png` | `unfreeze-03-marketplace-listed-nft-card.png` | Listed/frozen NFT card appearance on marketplace |

## Product Flow To Build Into The App

Fire Wall should explain four tabs:

1. `Running Votes`
   - User sees active NFTs.
   - User can vote `Burn` or `Forgive`.
   - After voting, card changes to `Voted: Burn` or `Voted: Forgive`.

2. `Results Den`
   - User sees ended NFTs.
   - Winner card appears.
   - Eligible action becomes `Reveal`, `Claim`, or `Unfreeze`.

3. `My Voting`
   - User sees only NFTs they voted on.
   - User can confirm, change, close, or unfreeze depending on status.

4. `Defrost House`
   - User sees frozen/listed NFTs.
   - User can unfreeze or follow external marketplace listing flow.

## UI States Needed

Use these states in the Fire Wall page:

```text
not-voted
vote-burn-selected
vote-forgive-selected
wallet-confirming
wallet-warning
vote-confirmed
results-waiting
winner-ready
reveal-ready
claim-ready
unfreeze-ready
listed-on-marketplace
transaction-failed
```

## Recommended Button Labels

Use exact labels so users understand movement:

```text
Vote Burn
Vote Forgive
Confirm Vote
Reveal Result
Claim Reward
Unfreeze NFT
View in Wallet
View on Marketplace
Close
```

