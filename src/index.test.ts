import { expect, test } from "bun:test";
import { toHalf, toFull } from './index';

const 半角カタカナ = "ｧｱｨｲｩｳｪｴｫｵｶｶﾞｷｷﾞｸｸﾞｹｹﾞｺｺﾞｻｻﾞｼｼﾞｽｽﾞｾｾﾞｿｿﾞﾀﾀﾞﾁﾁﾞｯﾂﾂﾞﾃﾃﾞﾄﾄﾞﾅﾆﾇﾈﾉﾊﾊﾞﾊﾟﾋﾋﾞﾋﾟﾌﾌﾞﾌﾟﾍﾍﾞﾍﾟﾎﾎﾞﾎﾟﾏﾐﾑﾒﾓｬﾔｭﾕｮﾖﾗﾘﾙﾚﾛヮﾜヰヱｦﾝｳﾞヵヶﾜﾞヸヹｦﾞ･ｰ､｡｢｣";
const 全角カタカナ = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ー、。「」";

const 半角英数字 = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ";
const 全角英数字 = "！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～　";

test("英数字・記号", () => {
    expect(toHalf(全角英数字)).toEqual(半角英数字);
    expect(toFull(半角英数字)).toEqual(全角英数字);

    // 変わらない
    expect(toFull(全角英数字)).toEqual(全角英数字);
    expect(toHalf(半角英数字)).toEqual(半角英数字);
});

test("カタカナ", () => {
    expect(toHalf(全角カタカナ)).toEqual(半角カタカナ);
    expect(toFull(半角カタカナ)).toEqual(全角カタカナ);

    // 変わらない
    expect(toFull(全角カタカナ)).toEqual(全角カタカナ);
    expect(toHalf(半角カタカナ)).toEqual(半角カタカナ);
});