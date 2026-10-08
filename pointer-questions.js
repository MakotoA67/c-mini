const questions = [

{
    question: "uint32_t * 型の p について、p + 1 は p が指しているアドレスから何バイト先を指す？",
    code:
`uint32_t data[3] = {10, 20, 30};
uint32_t *p = data;`,
    choices: [
        "1バイト先",
        "2バイト先",
        "sizeof(uint32_t) バイト先",
        "sizeof(p) バイト先"
    ],
    answer: 2,
    explanation:
        "p + 1 は、p が指している型の次の要素を指します。この場合は uint32_t * なので、sizeof(uint32_t) バイト先を指します。ポインタ変数 p 自体のサイズ sizeof(p) とは別の話です。"
},

{
    question: "次のコードで、*(p + 1) の値はどれ？",
    code:
`int data[3] = {10, 20, 30};
int *p = data;`,
    choices: [
        "10",
        "20",
        "30",
        "コンパイルエラーになる"
    ],
    answer: 1,
    explanation:
        "data は配列です。この式では配列名 data が先頭要素 data[0] を指すポインタとして扱われるため、p は data[0] を指します。p + 1 はその次の要素 data[1] を指すので、*(p + 1) は20です。"
},

{
    question: "p32 と p8 について、正しい説明はどれ？",
    code:
`uint32_t value = 0x12345678;

uint32_t *p32 = &value;
unsigned char *p8 = (unsigned char *)&value;`,
    choices: [
        "p32 と p8 は異なるアドレスを指している",
        "同じアドレスを指しているが、指しているデータの型が異なる",
        "キャストによってメモリ上のデータそのものが unsigned char に変換される",
        "*p8 の型は uint32_t である"
    ],
    answer: 1,
    explanation:
        "p32 と p8 が持っているアドレスは同じです。ただし、p32 は uint32_t *、p8 は unsigned char * です。キャストによってメモリ上のデータそのものが変換されるのではなく、そのアドレスにあるデータをどの型として扱うかが変わります。"
},

{
    question: "(uint32_t *)p8 というキャストは、何をしている？",
    code:
`uint32_t value = 0x12345678;

unsigned char *p8 = (unsigned char *)&value;
uint32_t *p32 = (uint32_t *)p8;`,
    choices: [
        "p8 が指しているメモリの内容を uint32_t に変換する",
        "p8 に入っているアドレスそのものを変更する",
        "p8 のポインタ値を uint32_t * 型として扱う",
        "p8 という変数名を p32 に変更する"
    ],
    answer: 2,
    explanation:
        "ポインタのキャストでは、ポインタ値が示しているアドレスそのものを変更するのではなく、その値を別のポインタ型として扱います。p8 という名前に特別な意味があるわけではなく、どの型のポインタとして扱うかは型によって決まります。"
},

{
    question: "1バイトが8ビットの環境で、*p8 の値はどれ？",
    code:
`uint32_t value = 0x12345678;
unsigned char *p8 = (unsigned char *)&value;`,
    choices: [
        "0x12",
        "0x78",
        "エンディアンによって異なる",
        "unsigned char * では参照できない"
    ],
    answer: 2,
    explanation:
	"このコードだけではエンディアンを決められないため、" +
	"この問題では「エンディアンによって異なる」が正解です。",
    feedback: [
	"ビッグエンディアン環境なら、実際に *p8 は 0x12 になります。",
	"リトルエンディアン環境なら、実際に *p8 は 0x78 になります。",
	null,
	null
    ]
},

{
    question: "次のようにキャストできた場合、*p32 で必ず正しくアクセスできると言える？",
    code:
`uint32_t data[2];

unsigned char *p8 = (unsigned char *)data;
uint32_t *p32 = (uint32_t *)(p8 + 1);`,
    choices: [
        "キャストできたので、必ず正しくアクセスできる",
        "コンパイルできれば、必ず正しくアクセスできる",
        "uint32_t に必要なアラインメントなどの条件を確認する必要がある",
        "CPUは必ず1バイトずつアクセスするので問題ない"
    ],
    answer: 2,
    explanation:
        "キャストを書くことができても、そのアドレスを uint32_t として正しくアクセスできるとは限りません。必要なアラインメントや、使用する処理系、CPUなどの条件が関係します。コンパイルできること、実行できること、意図した通りに安定して動作することは、それぞれ分けて考える必要があります。"
},

{
    question: "なぜ引数を const void * で受け取り、関数の中で const unsigned char * にしている？",
    code:
`void dump_memory(const void *data, size_t size)
{
    const unsigned char *p = data;

    /* p を使って1バイトずつ見る */
}`,
    choices: [
        "void * の方が unsigned char * より高速だから",
        "呼び出し側ではデータの型を限定せず、関数内では1バイト単位で扱うため",
        "void * なら *data でどんな型の値でも直接読めるから",
        "unsigned char * は関数の引数には使えないから"
    ],
    answer: 1,
    explanation:
        "const void * で受け取ることで、このインターフェースでは指しているデータの型を限定しない、という意図を表せます。実際にメモリを1バイトずつ見る段階で const unsigned char * として扱います。void * のままでは、指しているデータを具体的な型の値として利用することはできません。"
}

];
