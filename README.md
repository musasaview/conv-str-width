# conv-str-width

文字列の全角・半角を変換

## install

```sh
bun add https://github.com/musasaview/conv-str-width
```

## usage

```ts
import { toHalf, toFull } from 'conv-str-width';

toHalf("ガギグゲゴ");
// ｶﾞｷﾞｸﾞｹﾞｺﾞ

toFull("ｶﾞｷﾞｸﾞｹﾞｺﾞ");
// ガギグゲゴ
```