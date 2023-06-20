import Input from '@/components/Input/Input';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex h-screen flex-col justify-center">
        <div className="h-[50px] w-[356px]">
          <Input
            _fontSize={18}
            _inputClassName={`
           
          `}
          />
        </div>
      </div>
    </main>
  );
}
