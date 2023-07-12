export default async function getBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise((resolve) => (reader.onload = resolve));

  return reader.result;
}