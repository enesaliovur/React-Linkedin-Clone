import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
export const HeaderLeft = () => {
  return (
    <div className="header__left">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAY1BMVEUCdLP///8Ab7GRsNKFq9CLrdAAa68AcbKqx98AYKpUjsD4+/1tnskAaa4AZq0AbbDQ3+yqwtyzy+He6fJnmcbG1+iivNjs8/gwfbh6ps1BiL270ONAhLtzockygbnX5fCXudcptIY1AAAC1ElEQVRoge3b63KrIBAAYDAJpBoBb1GjJn3/p6ymzY1d085kwZw5bGf6R+NXFNgNFsbPYbKVn8jMN8imXzlLdeQntGD5j5uUqWT+QooyObul9qhOocvJzVLPLGNpNro+7/ElJGeVWMAVFdv7frpT6D3bRAu40YatF3HXwQ2uV1eOycPZVDbratHs1u0h0m7oGTeK9vU5Oydd7yRr4K7aJfwaWxcw6qoVvw/jYALHXD3wx6iUF1dyO+iHGuLqDLgJeYMRN0qAywfq0QRdGUOWd9RdC7p6hbgF9VhC3D3i1tQP+H3cqEXck/v7LBvEJa85kXEkCuj27scRdqNPPuYNpk7Om4vPz401Y23oMyGaB+WxfmDp09FM3pcyv6pF7C3vj6Ga/fSU6zxWTgqs2bpO6lSN4aise8f6Obhv68pIiHT8Eb92R9QFa2x3V5H2sdsRIft1Vo3RZZt4HBDPbNRtd1b0t4vH1qGh+bmQKquH6bXYHtT8nURdkI9W11NEbh+Lp2ZJ1dbgU7zYfcy1+W/ubclHbDE37ZGcfZabmYKBxFUbXJ1ih6/KUbgKqwSv0aIwgas+n7Gcl1jvet09lM9ZXjdI53rd7ZGvU4+RIwn8dRcUYzBi2ODX3T9EBwslLy6ysu7HhUvNflwDbrQflzt065MxppgZVKBHU7lV2URKpbJfIXnpPqGRunV5SbVSNAY5IbcnaRK3vs92UiM50dhTFokbP1xBHpG/zO5YFG5nNUZV8JwPB66db6S9vsnhQCJw4dpWCl0H4ygDJZSCPcu+JwRuCz6fwgd8pHfh4geyonugd2HdFsElTgeuPURQ156g3biwnqZ3k+AGN7jBDW5wgxvc4AY3uMH9j9xn73EIvw96iOAGN7j/tLvU//PDdU0PoTNmFtmvYRhn/jeoyFGFLzvcx5jWxqw3+IbF8L3PaxBe91ul0wuIc5bvvO4v6/jFXWA/3RfzujaVfudhEgAAAABJRU5ErkJggg=="
        alt=""
      />
      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
  );
};
