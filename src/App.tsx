import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <div class="mt-16 flex flex-col">
        <h1 class="text-4xl font-bold ">Dalton Bennyhoff</h1>
        {/* <h1 class="text-5xl font-bold">Bennyhoff</h1> */}
        <h2 class="text-xl">Software Engineer</h2>
      </div>
      <div class="mt-10">
        <h2 class="text-xl py-2 font-bold">About</h2>
        <p>
          Hi I'm Dalton. I am a software engineer based out of Dallas, TX.
          Before I started writing code; I was a pro-gamer in the Overwatch
          League. In my spare time I enjoy watching hockey and supporting
          Liverpool FC.
        </p>
      </div>
    </>
  );
};

export default App;
