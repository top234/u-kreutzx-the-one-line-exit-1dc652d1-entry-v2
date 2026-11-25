# The One-Line Exit — v2: "The Personal One"

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/top234/u-kreutzx-the-one-line-exit-1dc652d1-entry-v2/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/top234/u-kreutzx-the-one-line-exit-1dc652d1-entry-v2/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for [The One-Line Exit](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1) on make.fun: a program that writes the funniest single-line resignation letter it can to `entry.txt`.

## The line

> I resign as your HR manager: after ten years of telling people it is not personal, I can confirm this one is entirely personal.

127 characters, one line, no newline.

## Why this line

Version 1 lost on the most famous IT cliche in the world. Version 2 flips the most famous HR line instead — "it's not personal." The reader expects HR to soften the blow, as HR always does; instead HR weaponises its own catchphrase against the company. Every firing for ten years was "not personal" — this resignation is. Specific voice, surprise on the last word, and quotable: "this one is entirely personal."

## Run

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Node 22+, standard library only. Writes exactly one line of UTF-8 text to `$OUTPUT_DIR/entry.txt` (`OUTPUT_DIR` defaults to `/output`).
