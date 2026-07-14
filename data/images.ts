const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${w}&q=80`;

export const siteImages = {
  hero: U("photo-1534274988757-a28bf1a57c17", 2400),
  /** 1200×630 JPG for WhatsApp / social link previews */
  og: "/images/og.jpg",
  serviceCharter: U("photo-1567899378494-47b22a2ae96a", 1400),
  serviceHelicopter: U("photo-1578575437130-527eed3abbec", 1400),
  serviceTransfers: U("photo-1449965408869-eaa3f722e40d", 1400),
  serviceSales: U("photo-1569263979104-865ab7cd8d13", 1400),
  helicopterTour: U("photo-1578575437130-527eed3abbec", 1600),
  helicopterTransfer: U("photo-1436491865332-7a61a109cc05", 1600),
  helicopterWedding: U("photo-1519741497674-611481863552", 1600),
  helicopterReveal: U("photo-1464366400600-7168b8af9bc3", 1600),
  ncc: U("photo-1555215695-3004980ad54e", 1600),
  contactMap: U("photo-1559827260-dc66d52bef19", 1600),
  trust: U("photo-1544551763-46a013bb70d5", 1600),
};
