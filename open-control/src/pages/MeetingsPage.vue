<template>
  <PageComponent>
    <PageBody>
      <div class="container">
        <CompanySelector v-if="!user.roles.includes('inspector')" />

        <q-card v-ripple flat class="q-mt-lg bg-grey-2 q-hoverable">
          <q-card-section class="row no-wrap pulse" style="border-radius: 20px">
            <!-- Avatar -->
            <q-avatar class="q-mr-md">
              <q-img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGRgaGhoZGhwaHBkYGhwcGhwZGRwcGBocIS4lHCErIRgcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDE0NTQ0NDQ0NTQ0NDQ1NDQ2NDQ0PzQ0MTQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABEEAACAQIDBAcECAMHAwUAAAABAgADEQQSIQUxQVEGByJhcYGREzKhsRRCUmJywdHwgpKyIzM0c6LC4SSj8RZDVJOz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgMAAgMBAAAAAAAAAAECEQMxEiFBIlETYXEE/9oADAMBAAIRAxEAPwCZoiICIiAiIgIiICIiBpelu0Dh8FiKwNmSk+Q/fYZU/wBRWfNQEnfreq5dmuv26lJfRw/yQyCJKsIiIUiIgWG3mUyuoNZRAREQEREBJS6iq1quKT7SUn/laov+4SLZ33UzWy7RK39/D1FtzIem/wAgfjEKnqIiVkiIgIiICIiAiIgIiICIiAiIgRh124kijhqY3NUdz35Eygf9y/lIfknddtZWq4VVZSVWvmAIJXMaNsw4Xym3gZGMlahERAREQLVXfLcrqHWUQEREBEQTaAm96EbVTC42hXqEhFLhiAWIV0ddy6nUrumhzcv0nogfQq9ZuyzvxJHjRrj45LTbYHpbgaxAp4qizHcudVY+CtYmfMk8ZAd4vG00+twZ7PlbZW2sThSDh69Sna9lDZk133Rrq3mJL/QPrJ+lOuHxKBKzXCun925FzYgm6NYd4Nju0EppJcTyIR7ERAREQEREDyc5tzppgsKctSsC/wBhLu4/EF93+IicZ11bRqp9HoozIjioz5SVzlTTVVJG8DMTbvHKRMqgaAW8JFkSrtXreY3GGw1uTVmv/wBtD/vnEbX6YY7E3FTEuFP1Kf8AZp4EJYsO5iZoohdPFUDcLSmzcx5j87yueZhzgU5m+z6H9bRn+6fh+s9LiUmpA9z/AHT8P1njVbfVb4frKS5lECk1O4+k8D/dPwlcQKcx5epH5Rr3D1P6SqIFOXvPynoUCexARE8zD/xrA9iXcPhalQOadN3VAC7BTlQG9i7e6oNjqxG4zocB0C2hWCOlAFHAIc1aOWx3G6sSR4AwbczOn6t8A1faWHCjSmxrOfsqgNifFio852Oxep0mzYuvbmlAfOow+S+cknYewcPg0KYemqA6sd7MRxdjq287zpeEtbeIiVCIiAiIgIiIGi6U9G6OPo+yq3BBzI6+8jWtccxwIOhHkRHNXqerj3MVTb8VN0+TtJjiBBGL6qsevumi4+67KfMOot6zRY3oRtKkLthKhF7dgpV+CMTbyn0pEml2+UcXs3EUgDVw9amGNlLo6AkC5ALAXNpiproN/K639Lz6A60thPicKKlO5fDk1Mo1zLazgfeAFxztbjIYwuz6lfSnSepx7CM/frlBtOeeVl1I1JLGrGHbl8RH0duXxEzsZgqlFrMrofsurJfuGYXHlPFPdacryZRuYxhHDty+Ij6O/IeomfEz/NkvhGB9GfkPWPozfd9T+kzmvw3yvBbLeq1qdN6rX1yqz2P4VFlmpy2p4xqynI3/AAgt8d3xnooOeHyH5mdthugO0GGmHKjT33pr/pzXHpM9erLHcqQ8XP5LNeXJ8iax/aP6eFPH+r5WUS62FSx0156m3rNxtjZX0d8hr0aj/WFJncL3MxQLe+lgSRxmunK55b9tSRqxEc/E/OZmDpAAu24C4Hy8zPTllqbc5N0p0Ao7V7mzEWLDS4BKjlc2J77SSepvEuuIrUVa9FqXtSL3AfMqqyjhmUm9vsjlI7pgki51YFj3WtcDusw9O+St1MYBsmIxJtkdkpILa2pZixvyLPb+E9058e7lvbWWpEoxET0ORERAREQEREBERAREQEREDyfOmxuklfBu/wBGcLTZ2IUqrIVzHLod3ZtqCNwn0Nib5Gtvym3jYz5cw3uL4L8hOPNbJ6bwm67PFdYmNcWb2JHL2QYejEzksTVzFmsq3N7KoRRu0VRoo7hPJbq7j5fMTzeVy7rrqTpcnk9AlvGizAfvhMybulq5N/gemWNootOlWCKugVaVG3n2NT37zNZSQFRcT32K8pJyXHpbjtum6wNokW+kW7xTo3+KTW7Q6SYuuLVcTUYWsVDZFI+8iWU+YmMKK8p77NeQlvNlftTwjESmTuE8ZbG0z5gOdT4zOOW1sapt58T8zNrWpE0zl53tzA4D5+U1lUWLeJ+JvN2L5NBckEDzno5b1WMZ2xibIr8MrG/cQP0En/q+wHsNnYZNbmmKjX35ql6jX8C9vKQNWoZglFTq5SmP4iFGnnPpmkgUBRoFAA8ALCb4OrWOTvS7ERPQ5kREBERAREQEREBERAREQPJ86dMNjfQ8ZVogWQn2tLl7NyeyPwsGXwAn0XOF61dh+3whrqt6mHu4tvNM29oPIDN4p3zHJj5TTWN1ULSh93mPmJUDx4Sgm+Xx/IzxR3ZGHW7eGsx9o+8PA/7Zm4UaEzEx6Etf962/STG/kXpm4Z7qO6XZg4ZTcW85nTlnNVqEREihM117zJxtXKthvOgmKi2Fp0xnrbNrGxdIntDwPhzmTTxhAI07v+Z5UFwR3GYgM7T8pq/GOr6TD1X9EqDU6ePqN7Wo1yi2stJlJU6fWcEHU7uA4yUJF3UltG9LEYc70daq/hqCxA8GQn+KSjPXjrU043t7ERNIREQEREBERAREQEREBERASh1BBBFwdCDK4gfNvSjY5wmJr0LdkMWp8jSe7Ja/LVfFTNXvseR/Ij85LnXHsnNRpYpRrSbI5+5UIAv4Pl/mMiJtNfX9Z5OWarvhdxnYf3fOVugO+WcPUAFiZcaqo4zy2XbqrRQNBLOM90nlr5jUShsVyEtuzPYd8uMu91LWcDEARMK1+I1c/dAt5xPH99vL857OzBMVqZzEDx9f2ZlSgHtH8I+bTWN0lb7oDthcFjEq1Wy0nVqVRrEhQ1mQkDgGUa8Lz6Do1ldQyMGUgFWUggg7iCNCJ847LZVqUs4ursUYEXFnVlAI5XI9ZJPVltE0KtXZzk2W9bDEkm9Nj2kH4W1825T1cWW8XLOaqS4iJ1YIiICIiAiIgIiICIiAiIgIicp0w6RtQy4fDgPi6o7C71ppexrVeSjhfedNdYGJ0/2zS9k+BVWrYiujKtNCLoCNKlRjogU2IvqSB4iEACNGFmGjDkRoR63kxbG2OmHDNmZ6tQ5qtVtWdu88FHBRoJG/SrBezxdVRYKzZxf74zH/AFl5w55+O3XDtpFom3Zvb1ErFBuPytMtKdh7x8v385VlbmPTX52njuTrpbTDDjLqoBuEpyd59ZSQw+sD4j9LfnM9/Wl2JaWqeI9NR+vwl0GSzQ1t+03j+/nKpSF1J5n8hDNYXM7MDNb9/Ke0EJOu8/ADhKVXid/ymZh0sMx/Ykt1Ce2ZgKGevTT7JDnuCEH5gDznQbed6JpYykL1MM6tyzKxCspPJgbeZljovhCFasw1qWy9yC9j53v4Wm/xOFD4bEg7jSqC/I5Sb+VhPZxY+OMjjnd1Juz8YtaklVDdKiq6nuYAj5zKnzX0W6b4vABURhUog3NJ9RY+8Ebel/MXN7GTb0Y6a4THALTqZatrmk/Zcc8vBh3qT5Tqw6eIiAiIgIiICIlDMALk2HfAriaXF9KcFS0qYugp32NRM38oN5qMV1k7NQXGIzm1wtNKjk+YWw8yIHYRIsx/XCn/ALGFdu+qyUx6LnJ+E5LaXWTtGrfLVSipvpSQXt+N8xv3i0Cauke2kwdA1X1Oiog953bRUUcST6C54Tk9kYRxnrYghsTWIaow3KB7lNOSINO83J3zjOgWy3xFZsbiHeoyMUps7MxZ7dprngoNgBpe/KSNI1ISPOsmnarScbyjK3eAwKg/zNJCnA9PO2mcfVcW8LMvztM5zeNWX25NEVhcaeGkr9lfexPwmCjEbpd9q3Meh/WfPuN/bvKyPYDv9ZQ6gcT6n9Zazt+wf1lS0WbU6fvgJNa7q7U+9ooPibn4H85lU0yrb1nqIBulOIay+OkW79DDlC9o34Dd398Pr2fXw/5/WXqVO57p06jParD076ndNtsvAe3fKw/s11f7x+qnnvPd4yxhMOXcIm8+ij7R7vnOwwWFWkgRdw3k7yeJPfN8PHcr5XpnPLU1GRM7aLexwVZ7XIpOxG691MxcOmZ1XmRMjppWCYHEk8aZQeLkIPi09jkhFDoPCVDQggkEEEEGxBGoII1BlOHGi+ErYQNl/wCo8b/83Ff/AGv+s9mriDT64iIlZJHXWl0oxeCNAYfKi1A+Z2TP2ly2UX0BsSdRrbukiz566xukpxuLZUN6FAlKdjozbnfv10HcO8wMDFdLsfU97G1tfsMKX/5hbTVYzF1Kv97Vq1P8yo7/AALGWYkaULTUblHoJXEQE9oUnqMqIAWZlQE7szEKB6nU8JSiZzYe7xP5D9Z0PROmv0zDg2CqzNyAy03IJ7gQD5QqVNl4FaFJKSe6ihb8SeLHvJufOZc5Kv08oZ1p0UeszMEBXsJmJygAtqdbagETcVdpugJqYdwAPepkVVHiBZ/PKYF/amJyrlG9vgJxvSkf9M/c1P8ArWbj6YK3bVgwOmhuBbS3cRMPa2ENWi6AgEgWvuupDC/mLSZe4n1HwEz6aAATEr0mRijgqw3g7/HvHeJepVxuM+dnK9GNX4gGJzaJh4qpr3CZFepYW4zAGpvwG7vPObwx+s5V7SQ+Z3/p5TZ4XDM7BEF2PoBxZuQ+e6WsJhySALZjz0CqN7MeAHH04zZrtyjhlKUVNR97OeyrHnexJHIAW753w4/O7vTGWWvU7dHs/ApRTKupOrMd7HmfyHCZU5PZ3Siq9RUNENe9/Zk5gBxs2lh4j8p1FGqrqGU3B/8ABBHAjdaeyTTk2Wyad3v9kfPSaHrUxmXDJTG+o5Y6/VRSd3HtFZ1Gx0shbmflIw6y8b7TFOoNxTREH4m7bf1KPKBy2FGg8JcqjWKIntUaQKcnfEoiB9cREwdr7Rp4ei9eq1kpqWY+G4DmSbADiSJWXJdafSf6JhjSpn+3r3RLb1Tc7nlpoDzN+BkEUkCgAcJsdubXqYzEPiK3vPoqg3CKPdRe4ceZJPGYMjUIiICW3uSFXed/cP3+crY2F5dwyWFzvMC5TQKABuEqa9jlNiQy+ToyN8GM9njGwhW+6v8ABCpjA1uzRQt3BmBVfm3pJXnH9W2AyYY1SO1Wct/AnZQeGjH+KdhA4vp24w3s69IAVHfK43K6hGY5x9rRQG368d092Zj0r01ddx3g71Yb1bvEwOtGrrh07qjf0AfMzneiWKKVsv1HFmHI3UK3qQv8UI7PG4JKq5XW44HcQeYPCcDtKgadV0U51UgXPZO4E3tod9uEkYm2pkbVKpdmc73Jb+Y3nHm1prDtZFUj6reVv1lX0g8n/fnL9KiW7hLwww755Llj+nbVa9izaWK8ySL27rGZ2Fw5JUBbsdFXdu4nkBz4TJwWAao+SkmZ9+psqj7Tt9UfHleZW3AmGT2KNnquv9o/3PsqPqqTcAcgSdZ1wwuf9RjLLX+tBisTmuqtdeJGgcjifuj6o8zqdKMNh3qOERczncPmSeAHOMNh2d1RBdm0A+ZJ4Ac5IGxNkJh0sO07e+/PuHJRwH5z1ySTUctvNibIXDpb3naxd+Z5Dko4Dz4zIVclXT3agJPLOttR3lf6PGZcx8RbPRJF/wC2QW/GGT/d8JR0yMtKlmbRUQu3cACzSCdrYlqrNUb3qlQuRyzEtbyFh5SVOsPaYp4b2IPbrXS33BbOfQhf4pFGNHaUcsx+Q/OApbpVU3TylulTbjAx4iIH1xIL60+lP0mt9HpNehRbtkHs1KvHxCbh94nkJ3/Wf0iOEwZWmwWvWPs6f2gD77jiMq8eBKyBKaWAA4RUj2J6ykbwZ5CkSkXJsBeXAh5H0gWwuZgvAan8h++UzZZwyEAsQQWN9eW4fr5zJ9m2/KbeEKolqsCbKL3YhRbfdjYW8zL2U8jNh0cwZqYzDqVNhUzm4+wGcfFRAlzA0AlNEUWCqABy7pfi0WgRd1lV82KRPsUlv4uzH5AessdDKAZMY53pQGU8iSz39aSnymL0ydnxtc2NgyoNPsIin/UGm76C4Vnw2MCqSzqEA4nsPoP5oRsdt1slCow35SB4t2R85wdJLm067pRWBwwtudkt4Dt/7ZzNGyrc+M8v/Rfcjrxxd0A7hN50f6NvibO+anR4Hc9T8AI7KfeOp4c5tejfRQELWxK3O9KR91RwNQfWbjlOg7zOkx2NsMqannwEvFwa95GefyNdXSjhqbJSUIgBaodSTYalmOrGw3kyKq1R8RVJALPUbRR8B3ADj3TsulldhSFJAWeswQKN5Xe3kbZb98u7C2GuHGZrNUYWZuAH2U7u/jbwA9LkbC2KuHUknNUYDM3AD7K93z9AN7hsMXNhu4mXMHgy55Lz/SbulSCiwFhA0WOphXyjgBOPxm0s+Ow6IezTrU7kcXLBSPAAkeJPKbjphtb2WYJrUclU+7bQufDh32nCYbNTKsLhlIYE3PaGoPeb6wNn0q2l9JxbsDdKd6acrKSGbza58As5rEm9Q9ygeus2FKidygnwmudDnckEXa2o4DSFXU3T0z0RCMaJ7aIHQdLNutjcXUrHMEBKUlbTKimw7PBiRmPebcJg7MxGSqjZVYA6qwuDfTnMWXKPvL4iBNnSToxQr4LPSpqjhFfs33FQSNfG/lIU9ic2Tje0njZ+2BTr4eg9stXD0gL/AGsn7HnOVr9Dwu0mZhaiL1WPDKvaI89B5wjebC6M4ehgC70kepkLnMDpcXUb+Vj5zmerpqWIxNSnUo02WzMOyQR3DXdp8Z2uA2n9JwWJqczUA7gBoPIaTg+qP/HVPwN8zA2FXZdOvtQ4YIqJTueyLEgbwbk3OmnjLm3du0cLXNE4OmaSmxJVs9uee80XSXatTCbWevTF8rG45gk3E7zDbQwG10ytZalrFTYOD3H6wgazG1MBSqCp7NChw4dVP1mZ7DxI1v3KeU2fQfF4fFGo6YdEanoCob6wPMzgOm3RyphGUFi1M+4e7l3b93fOq6m/dxHinyMDpMPtAtUqUqlNFITOjLcg7xqCQbggad4lzo7jDXoVGZEDpUqU9A2U5Da9r3+Ms1feMtdCWC4fEEgkDEVyQLX9484WuI/9XUDiHWphKTD2jq7KHBNmIJ1YjW03fQjH0zjK1CmiGi9R3RgDfsgWA13Wy+swdlV9ms1bIHFQpVIzlCLlXJ93jvtMHqsP/Wnlerb+SnCOn21j8OmLTDVcOjIz2DDMGBYZr2vbifQzH250Xw+FrLiG/u1F0U7g4OjNffl0I7yOIE6StsnDYjFmoTmqUst10GozWPh2pxfWT0qyVBSpqDWUe8wzLSvxQHQv38PhFkvaytR0h6ZOjZESzWBIc2sDqMyA5gSODZT3TsujWKTHYB39mntVDAhcwFxqNL34H0kIO28kkk3JJNyTvJYnee+SV1UYl8PXFKoMq4hCyA77rzHAnTT70FZ/V5RVK7UMRRT2hUuj2ObKSbqTffoZs9v4Vlao6hECBm7SkqQoJtYMDrbf8DM98IMPiauJbRKaBV72qMPgBb1mz25g/bmkF1R2UufuL2z62C/xQjDx1R0wyMqU0qZA7KVYre2bLowI5X1irthE2euLdBcpmyrfU62AudN3GWOkeORKdWo7BVCNqfAgAczuAEtUlpHZFIVs3s8gvlsTvbmQIHAdCMb9Ixw+kU0qe1Y7weyOAQ30Av8Au86LpfsdamMp4ajTRL5SSBrqLm5vu1+E86JLgPpVP2Rq+0v2cwpgf6WJnVUwp2q194pdnzC3+EDk+kT4bZirTSmj1Mt2ZxmA0vYLcAed5Y6NNhNrI1NqKUawGZWQZQfFd3pNB1sufpNS/HQeZA+Uo6pSRj0tuysD4WMDSbe2U2GrNSYaqZrZIPW+F+lC2/Kt/SR9CqMk9lUQEycBQLuqggXPEhR6sQBMaeg21gST0+uhw1am6saSUwcrKxuosRYG82vSzplSqYBWRh7SqoVwN6hTqDyudR3SJHrMdCxMsVm0A4QaTX0LCJs16bVKYd85AzpfUafW085ourPDCji6ju6KAGXV0GpPAZtd/CRimKcaBiBL6VmGoYjwgSpVoUTtVjVemadRKuuZCLFHBuQTbRuM0rdCaiYgVMPWQoGBDLUpgW77tceE4Y12JvmN4+lOBoxECTOsvbtOpTp0FcOyDtsNQWsAbHju3zY9UyrTSqXdAXK5RnTMbA37N7jzkNYeqc1mNw3Pn/yPlNnhMaaNSm9+ylRGYcCgIzAjjpeDSc8QLMbkeomP0WqIuHxCmrTu1Wsw7aHRibE2bTznrqHFiAwPMAg+RnMdPyEwZyAKTUpi6gA2zZjuH3YK0mD6DE1O1iKIF9T7WmdPBWJnT9GMPQo48+zdBSRCly6DM+VVZrE3OYi+mlgJEn0p/tmeLXYG4Y3gSL0m2w+D2l9IR1ZGNmAZWBXiDlOm/j+U2HTTZeHx1JcVh6lMORdgXRT55iNZFD1GbeSfGZuxKBq10QswQ3zgHeqgtbuva3gYG06ObBLuKtQdhTdAfrkbmP3Rw5nu39RtNHVFxKb8O61L/dvZ/QHN/DMyhSuQqjuA4AToUwyhMhAKkWIIuCDoQQd4gbLbdRMRhsm4VadzzGddPMX+EwOh21S+BAqaPSL0XvwZNG15DUeU8xFdUQu7BUUXJJsAJGHSXpS2IzUqAyUCTmNsrVCd9x9VTy3njyg0p6W7b+m1wiN/YobLrYO97FyTpbgL8LnjJExtNW2StEVKZZUFwHp9535rcZDYUS77d92Y2g06boBQAxtN2ZFVCblmVfmRfynT9M9qNhsdTxdNldAArBWVri1iLA34GRejkG40POVPVZt5Jg0kTplsultQJXw1RC+hdSyq4sOTEX8p70U2ZR2WGxFeohqZSFRWVmuRxykhRIqfFOHbKxAAA898utXdh2mJgbPpLtdsVXeq3E6eE1MRARKc4nsD2IiAlutwiIFqZAiIHsRECwPeH4h85l4z3G8D8p5EKnTAf3VP/LT+kTm+sj/CD/NT5PEQiLIiICbzoh/iP4H+axECR9le/wCRm8iII47rN/wi/wCanzMjpNwiIVVERAREQNW/vv8Ai/ITIERCPZ426IgY8RED/9k="
                alt="Mister Who"
              />
            </q-avatar>

            <div style="margin: auto 0">
              <div style="font-weight: 500">Инспектор «Mister Who»</div>
              <div class="text-grey text-caption">Встреча началась</div>
            </div>

            <q-space />

            <q-btn
              round
              flat
              color="accent"
              style="width: 48px"
              @click="joinConference()"
            >
              <q-icon name="video_call" style="font-size: 30px" />
            </q-btn>
          </q-card-section>
        </q-card>

        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div class="conference" v-if="isLive">
            <video autoplay loop>
              <source src="/public/inspector.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <q-btn
              icon="close"
              flat
              color="white"
              round
              size="sm"
              @click="leaveConference()"
            />
          </div>
        </transition>
      </div>
    </PageBody>

    <PageNavbar />
  </PageComponent>
</template>

<script setup>
import CompanySelector from 'components/CompanySelector.vue';
import PageComponent from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
import PageNavbar from 'components/Page/PageNavbar.vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'stores/store-auth';
import { ref } from 'vue';

const { user } = storeToRefs(useAuthStore());

const isLive = ref(false);
const joinConference = () => {
  const audio = new Audio('/public/connect.mp3');
  audio.load();
  audio.play();
  isLive.value = true;
};

const leaveConference = () => {
  const audio = new Audio('/public/hangup.mp3');
  audio.load();
  audio.play();

  isLive.value = false;
};
</script>

<style scoped lang="scss">
.conference {
  width: 300px;
  position: absolute;
  bottom: calc(24px + 92px);
  left: 50%;
  transform: translate(-50%);
}

.conference video {
  border-radius: 20px !important;
  width: 100%;
}

::v-deep(.conference) {
  .q-btn {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}

/*
 * pulse animation
 */
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(227, 80, 55, 0.3);
    box-shadow: 0 0 0 0 rgba(227, 80, 55, 0.3);
  }

  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(227, 80, 55, 0);
    box-shadow: 0 0 0 10px rgba(227, 80, 55, 0);
  }

  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(227, 80, 55, 0);
    box-shadow: 0 0 0 0 rgba(227, 80, 55, 0);
  }
}
@keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(227, 80, 55, 0.3);
    box-shadow: 0 0 0 0 rgba(227, 80, 55, 0.3);
  }

  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(227, 80, 55, 0);
    box-shadow: 0 0 0 10px rgba(227, 80, 55, 0);
  }

  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(227, 80, 55, 0);
    box-shadow: 0 0 0 0 rgba(227, 80, 55, 0);
  }
}

.pulse {
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
</style>
