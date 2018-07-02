import dynamic from 'next/dynamic'
const CodeEditor = dynamic(import('../components/codeEditor'), {ssr: false})

export default () => {
  return (
    <div>
      <CodeEditor value={"for (var i=0; i < 10; i++) {\n  console.log(i)\n}"} />
    </div>
  )
}

