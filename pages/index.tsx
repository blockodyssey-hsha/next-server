export default function Home() {
    return (
        <div>
            <ol>
                <li>
                    <a
                        href={
                            "https://trive-attachment.s3.ap-northeast-2.amazonaws.com/subscription/4768/3695/467a9abd-22fb-4cd1-8bbd-95f42a975901.pdf"
                        }
                        target="_blank"
                        rel="noreferrer"
                    >
                        PDF 다운
                    </a>
                </li>
                <li>
                    <a
                        href={"api/helloEdge10"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        PDF 열기
                    </a>
                </li>
            </ol>
        </div>
    );
}
