//inject in f12 console after submit 
function tt() {
    var words = ''
  
    $('span[onmouseover]').each(function (i, obj) {
        var $this = $(obj)
        var word = $this.text()
        var wordId = Number(
            $this
                .attr('onmouseover')
                .replaceAll('_L4(this,', '')
                .replaceAll(')', '')
        )
  
        var x = _lm[wordId]
        try {
          x = x
              .replaceAll('<LI><span>(adv)</span>', '')
              .replaceAll('<LI><span>(v)</span>', '')
              .replaceAll('<LI><span>(n)</span>', '')
              .replaceAll('<LI><span>(j)</span>', '')
              .replaceAll('<LI><span>(a)</span>', '')
  
          x = x.match(/<LI><span>\((.*?)\)<\/span>/g)
          if (x != null) {
              x = x.find(function (val) {
                  return val.search(/[ก-ฮ]/)
              })
              if (x != null) {
                  x = x.replaceAll('<LI><span>(', '').replaceAll(')</span>', '')
              }
  
              words += `${word}(${x}) `
          }
        } catch (error) {
          words += word+' '
        }
        console.log(word, x)
    })
    console.log(words)
  
  };tt();
  
  
