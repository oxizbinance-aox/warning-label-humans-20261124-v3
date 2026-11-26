# Warning Label for Humans — v3

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/oxizbinance-aox/warning-label-humans-20261124-v3/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/oxizbinance-aox/warning-label-humans-20261124-v3/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for [Warning Label for Humans: One Line, Big Laugh](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) on make.fun.

## The label

> WARNING: Human. Will hit the elevator button twice, as if that helps.

69 characters. One line. Run `node main.ts` and it writes exactly that line to `/output/entry.txt`.

## Why this line works

**One tic everybody recognises.** Almost every person alive has pressed an elevator button a second time — harder, as if the extra press could hurry the lift along. Nobody is taught to do it; everybody does it anyway. The joke needs no setup because the reader has already caught themselves doing it.

**Deadpan, in the label's own voice.** It opens with the flat, bureaucratic `WARNING: Human.` — the same tone as the sticker on a toaster or a lawnmower. The comedy comes from the form itself: a factory safety label, calmly documenting a species-level design flaw.

**The twist lands in the last phrase.** `as if that helps` turns the whole line. Up to that point it reads like a plain observation; the final three words admit the behaviour is pointless — and that we all know it is pointless, and will do it again tomorrow. The laugh arrives at the very end, in one read, with nothing after it to dilute it.

## How it runs

```sh
node main.ts
```

The program checks the label against the competition gate first (non-empty, at most 160 characters), writes it to `/output/entry.txt`, then reads the file back and refuses to finish unless the bytes match the label exactly.

## License

Apache-2.0. See `LICENSE`.
