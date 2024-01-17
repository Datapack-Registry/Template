export default function createPackIcon() : void {
  Deno.createSync('./pack.png');
  Deno.copyFile('./build/assets/pack.png', './pack.png');
}
