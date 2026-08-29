const questions = [
    {
        question: "8ビットの unsigned 整数で表現できる範囲はどれ？",
        code: "",
        choices: [
            "-128 ～ 127",
            "0 ～ 255",
            "0 ～ 127"
        ],
        answer: 1,
        explanation:
            "8ビットでは全部で256通りの値を表現できます。unsigned では負の値を扱わないため、0 ～ 255 になります。"
    },

    {
        question: "次のプログラムで、2つ目の printf() は何を表示する？",
        code:
`char c = 'A';

printf("%c\\n", c);
printf("%d\\n", c);`,
        choices: [
            "A",
            "65",
            "エラーになる"
        ],
        answer: 1,
        explanation:
            "char は文字を扱うためによく使われますが、C言語では整数型です。一般的なASCII環境では 'A' に対応する整数値は65です。"
    },

    {
        question: "単なる char は、必ず signed char として扱われる？",
        code: "char data;",
        choices: [
            "必ず signed になる",
            "必ず unsigned になる",
            "処理系によって異なる"
        ],
        answer: 2,
        explanation:
            "単なる char が signed 相当になるか unsigned 相当になるかは、処理系によって異なります。数値データとして使う場合は unsigned char や uint8_t などで意図を明示すると分かりやすくなります。"
    },

    {
        question: "C言語で sizeof(char) の値はいくつ？",
        code: "",
        choices: [
            "必ず1",
            "必ず8",
            "CPUによって1または2"
        ],
        answer: 0,
        explanation:
            "sizeof(char) はC言語では必ず1です。ただし、その1バイトが何ビットかは処理系によって異なる可能性があります。一般的なPCやマイコンでは8ビットです。"
    },

    {
        question: "32ビットの符号なし整数を明示したいとき、どの型が分かりやすい？",
        code: "",
        choices: [
            "uint32_t",
            "int32_t",
            "char"
        ],
        answer: 0,
        explanation:
            "uint32_t は32ビットの符号なし整数型です。組み込み開発では、レジスタや通信データなどビット幅が決まっている値を扱うときによく使われます。"
    }
];
