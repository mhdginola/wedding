/** Foto pre-wedding lokal dari `public/images/pre-wedding/`. Urutan sama dengan berkas yang diunggah. */
const BASE = '/images/pre-wedding';

const PREWEDDING_ORDER = [
  'NBT09832-3881c371-b72f-436d-8283-5f361a0416de.png',
  'NBT00191-096a3b8c-6f5e-4c50-9b81-ab861bb23192.png',
  'NBT09508-fe8994d1-687b-4283-aa90-56ce6d2251f1.png',
  'NBT09847-541a4cee-3840-462b-a1f9-0b280450df23.png',
  'NBT09803-64fd6a6f-5d82-47b7-900a-c375dc60d98f.png',
  'NBT00176__1_-351cb696-8240-4abd-a517-ce52035985b2.png',
  'NBT09841-13dfd1f1-36df-4557-952b-7ae1a49eb628.png',
  'NBT00065-f3d58d7f-73c1-4c96-bd10-84ca2fc3b9cb.png',
  'NBT09851-9e2519c2-ccd8-4910-9cb1-c23c993e5366.png',
  'NBT09859-f090e8f5-3aca-4720-bb99-8a566714b885.png',
  'NBT09783-3e5efe27-a4b2-4bf0-bd96-43a073f9e99e.png',
  'NBT09540-73bd16b9-b01e-40de-8ef2-6165df97eda4.png',
  'NBT00290-9212f3be-c6db-4f80-bdac-1f3b414eaab0.png',
  'NBT09918-d49c78d0-f176-46d4-8373-f882dafb78f2.png',
  'NBT00308-04fe66fd-4d8c-4d5b-a894-92780dcf0c4e.png',
  'NBT09527-825a56e4-9325-498c-b084-1502f495ab3f.png',
  'NBT09496-76677547-c303-4211-9113-4c0f3b285314.png',
  'NBT09516-85facc29-cf66-476f-b94a-a07d6aa9d8b6.png',
  'NBT00074-4d9b2d59-6067-464b-a11a-849c26d9c085.png',
  'NBT09877-fedbdf7d-2b03-496c-99a9-9fa306c7540c.png',
  'NBT00131__1_-c90f7360-ebe8-4fd6-95e4-9e419c7172cf.png',
  'NBT09583-216f6b65-fe26-451e-8954-9c3998dc94fd.png',
  'NBT09304-e3d58c31-b55d-4734-ac24-60aab047c5eb.png',
  'NBT00131-8862bb7a-7f46-45c7-8cbd-1bfd50d2a803.png',
  'NBT00022-4b754f78-5ba8-464b-a80f-76b4c83bc4f9.png',
  'NBT00094-2e5a146b-062f-4996-9dba-97c3706c847f.png',
  'NBT09725-9dae22b9-802b-4b6c-9711-dfb36593fde1.png',
  'NBT09429-0ac2779d-e10c-4ae7-a7cb-1877640fe8d0.png',
  'NBT09898-a4ef6acf-7b1d-405f-b23e-78f96b04d459.png',
  'NBT09908-4dbb1cd2-9a5d-42a3-ab67-cf05863b7eb6.png',
  'NBT09954-50ceae9a-39d8-4dea-b25f-606af06d973e.png',
  'NBT09637-0d216f65-b02c-4121-814d-6cd6bd49a1ca.png',
  'NBT09892-3eb5655d-ff73-4925-9d4c-a8006fe6f09c.png',
  'NBT09687-5508ceaf-45a3-44d9-b99d-4699bda0bef0.png',
  'NBT00063-3ab03519-2ae1-48d7-b0a1-87b671be0c82.png',
  'NBT00124-0f2f82af-17ed-4b49-a659-1f445e925f98.png',
  'NBT00056-98900f48-b0d6-4109-b78e-caa2ceac315e.png',
];

function asset(file) {
  return `${BASE}/${file}`;
}

/** Foto indeks ≥ 11 untuk grid galeri (7 tile memakai 7 foto pertama dari sisa daftar). */
const GALLERY_ONLY = PREWEDDING_ORDER.slice(11);

export const weddingPhotos = Object.freeze({
  cover: asset(PREWEDDING_ORDER[0]),
  hero: asset(PREWEDDING_ORDER[1]),
  bride: asset(PREWEDDING_ORDER[2]),
  groom: asset(PREWEDDING_ORDER[3]),
  event1: asset(PREWEDDING_ORDER[4]),
  event2: asset(PREWEDDING_ORDER[5]),
  countdown: asset(PREWEDDING_ORDER[6]),
  quote: asset(PREWEDDING_ORDER[7]),
  giftHero: asset(PREWEDDING_ORDER[8]),
  thankYou: asset(PREWEDDING_ORDER[9]),
  wishesThumb: asset(PREWEDDING_ORDER[10]),
  gallery(n) {
    const idx = (((Number(n) || 1) - 1) % GALLERY_ONLY.length + GALLERY_ONLY.length) % GALLERY_ONLY.length;
    return asset(GALLERY_ONLY[idx]);
  },
});

/** Alias untuk impor komponen yang masih pakai nama `dummyImg`. */
export const dummyImg = weddingPhotos;
