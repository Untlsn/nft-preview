<script>
  import EthereumIcon from '$lib/EthereumIcon.svelte'
  import Clock from '$lib/Clock.svelte'
  import faker from 'faker';


  export const prerender = true;

  const days = faker.datatype.number({ min: 1, max: 9 });
  const eth = faker.datatype.number(100) / 1000;
  const id = faker.datatype.number(9999);
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
</script>

<div class="h-screen flex items-center justify-center bg-background text-white">
  <div class="w-100 bg-tile rounded-2xl p-8">
    <img class="rounded-xl" src="image-equilibrium.jpg" alt="equilibrium">
    <div class="pt-8">
      <h2 class="text-2xl font-bold">Equilibrium #{id}</h2>
      <p class="text-lg py-4 text-[#90A8C4]">Our Equilibrium collection promotes balance and calm.</p>

      <div class="flex items-center justify-between">
        <p class="flex items-center gap-2 text-ethereum font-bold">
          <EthereumIcon />
          <span>{eth} ETH</span>
        </p>
        <p class="flex items-center gap-2 text-[#8BACD9]">
          <Clock />
          <span>{days} days left</span>
        </p>
      </div>
      <hr class="border-white border-opacity-30 my-4">
      <div class="flex items-center gap-4">
        <img class="h-10 w-10 rounded-full border-white border-1" src="image-avatar.png" alt="avatar">
        <p><span class="text-[#90A8C4]">Creation of</span> {name}</p>
      </div>
    </div>
  </div>
</div>