<script language=javascript>document.write(unescape('/*%21%0A%20*%20bootstrap-tokenfield%200.12.1%0A%20*%20https%3A//github.com/sliptree/bootstrap-tokenfield%0A%20*%20Copyright%202013-2014%20Sliptree%20and%20other%20contributors%3B%20Licensed%20MIT%0A%20*/%0A%0A%21function%28a%29%7B%22function%22%3D%3Dtypeof%20define%26%26define.amd%3Fdefine%28%5B%22jquery%22%5D%2Ca%29%3A%22object%22%3D%3Dtypeof%20exports%3Fmodule.exports%3Dglobal.window%26%26global.window.%24%3Fa%28global.window.%24%29%3Afunction%28b%29%7Bif%28%21b.%24%26%26%21b.fn%29throw%20new%20Error%28%22Tokenfield%20requires%20a%20window%20object%20with%20jQuery%20or%20a%20jQuery%20instance%22%29%3Breturn%20a%28b.%24%7C%7Cb%29%7D%3Aa%28jQuery%2Cwindow%29%7D%28function%28a%2Cb%29%7B%22use%20strict%22%3Bvar%20c%3Dfunction%28b%2Cc%29%7Bvar%20d%3Dthis%3Bthis.%24element%3Da%28b%29%2Cthis.textDirection%3Dthis.%24element.css%28%22direction%22%29%2Cthis.options%3Da.extend%28%210%2C%7B%7D%2Ca.fn.tokenfield.defaults%2C%7Btokens%3Athis.%24element.val%28%29%7D%2Cthis.%24element.data%28%29%2Cc%29%2Cthis._delimiters%3D%22string%22%3D%3Dtypeof%20this.options.delimiter%3F%5Bthis.options.delimiter%5D%3Athis.options.delimiter%2Cthis._triggerKeys%3Da.map%28this._delimiters%2Cfunction%28a%29%7Breturn%20a.charCodeAt%280%29%7D%29%2Cthis._firstDelimiter%3Dthis._delimiters%5B0%5D%3Bvar%20e%3Da.inArray%28%22%20%22%2Cthis._delimiters%29%2Cf%3Da.inArray%28%22-%22%2Cthis._delimiters%29%3Be%3E%3D0%26%26%28this._delimiters%5Be%5D%3D%22%5C%5Cs%22%29%2Cf%3E%3D0%26%26%28delete%20this._delimiters%5Bf%5D%2Cthis._delimiters.unshift%28%22-%22%29%29%3Bvar%20g%3D%5B%22%5C%5C%22%2C%22%24%22%2C%22%5B%22%2C%22%7B%22%2C%22%5E%22%2C%22.%22%2C%22%7C%22%2C%22%3F%22%2C%22*%22%2C%22+%22%2C%22%28%22%2C%22%29%22%5D%3Ba.each%28this._delimiters%2Cfunction%28b%2Cc%29%7Bvar%20e%3Da.inArray%28c%2Cg%29%3Be%3E%3D0%26%26%28d._delimiters%5Bb%5D%3D%22%5C%5C%22+c%29%7D%29%3Bvar%20h%3Db.style.width%2Ci%3Dthis.%24element.width%28%29%2Cj%3D%22rtl%22%3D%3D%3Da%28%22body%22%29.css%28%22direction%22%29%3F%22right%22%3A%22left%22%2Ck%3D%7Bposition%3Athis.%24element.css%28%22position%22%29%7D%3Bk%5Bj%5D%3Dthis.%24element.css%28j%29%2Cthis.%24element.data%28%22original-styles%22%2Ck%29.data%28%22original-tabindex%22%2Cthis.%24element.prop%28%22tabindex%22%29%29.css%28%22position%22%2C%22absolute%22%29.css%28j%2C%22-10000px%22%29.prop%28%22tabindex%22%2C-1%29%2Cthis.%24wrapper%3Da%28%27%3Cdiv%20class%3D%22tokenfield%20form-control%22%20/%3E%27%29%2Cthis.%24element.hasClass%28%22input-lg%22%29%7C%7Cthis.%24element.hasClass%28%22form-control-lg%22%29%26%26this.%24wrapper.addClass%28%22input-lg%20form-control-lg%22%29%2Cthis.%24element.hasClass%28%22input-sm%22%29%7C%7Cthis.%24element.hasClass%28%22form-control-sm%22%29%26%26this.%24wrapper.addClass%28%22input-sm%20form-control-sm%22%29%2C%22rtl%22%3D%3D%3Dthis.textDirection%26%26this.%24wrapper.addClass%28%22rtl%22%29%3Bvar%20l%3Dthis.%24element.prop%28%22id%22%29%7C%7C%28new%20Date%29.getTime%28%29+%22%22+Math.floor%28100*%281+Math.random%28%29%29%29%3Bthis.%24input%3Da%28%27%3Cinput%20type%3D%22%27+this.options.inputType+%27%22%20class%3D%22token-input%22%20autocomplete%3D%22off%22%20/%3E%27%29.appendTo%28this.%24wrapper%29.prop%28%22placeholder%22%2Cthis.%24element.prop%28%22placeholder%22%29%29.prop%28%22id%22%2Cl+%22-tokenfield%22%29.prop%28%22tabindex%22%2Cthis.%24element.data%28%22original-tabindex%22%29%29%3Bvar%20m%3Da%28%27label%5Bfor%3D%22%27+this.%24element.prop%28%22id%22%29+%27%22%5D%27%29%3Bif%28m.length%26%26m.prop%28%22for%22%2Cthis.%24input.prop%28%22id%22%29%29%2Cthis.%24copyHelper%3Da%28%27%3Cinput%20type%3D%22text%22%20/%3E%27%29.css%28%22position%22%2C%22absolute%22%29.css%28j%2C%22-10000px%22%29.prop%28%22tabindex%22%2C-1%29.prependTo%28this.%24wrapper%29%2Ch%3Fthis.%24wrapper.css%28%22width%22%2Ch%29%3Athis.%24element.parents%28%22.form-inline%22%29.length%26%26this.%24wrapper.width%28i%29%2C%28this.%24element.prop%28%22disabled%22%29%7C%7Cthis.%24element.parents%28%22fieldset%5Bdisabled%5D%22%29.length%29%26%26this.disable%28%29%2Cthis.%24element.prop%28%22readonly%22%29%26%26this.readonly%28%29%2Cthis.%24mirror%3Da%28%27%3Cspan%20style%3D%22position%3Aabsolute%3Btop%3A-9999px%3Bleft%3A-9999px%3Bwhite-space%3Apre%3B%22/%3E%27%29%2Cthis.%24input.css%28%22min-width%22%2Cthis.options.minWidth+%22px%22%29%2Cthis.%24wrapper.insertBefore%28this.%24element%29%2Cthis.%24element.prependTo%28this.%24wrapper%29%2Cthis.%24mirror.appendTo%28this.%24wrapper%29%2Cthis.update%28%29%2Cthis.setTokens%28this.options.tokens%2C%211%2C%21this.%24element.val%28%29%26%26this.options.tokens%29%2Cthis.listen%28%29%2C%21a.isEmptyObject%28this.options.autocomplete%29%29%7Bvar%20n%3D%22rtl%22%3D%3D%3Dthis.textDirection%3F%22right%22%3A%22left%22%2Co%3Da.extend%28%7BminLength%3Athis.options.showAutocompleteOnFocus%3F0%3Anull%2Cposition%3A%7Bmy%3An+%22%20top%22%2Cat%3An+%22%20bottom%22%2Cof%3Athis.%24wrapper%7D%7D%2Cthis.options.autocomplete%29%3Bthis.%24input.autocomplete%28o%29%7Dif%28%21a.isEmptyObject%28this.options.typeahead%29%29%7Bvar%20p%3Dthis.options.typeahead%2Cq%3D%7BminLength%3Athis.options.showAutocompleteOnFocus%3F0%3Anull%7D%2Cr%3Da.isArray%28p%29%3Fp%3A%5Bp%2Cp%5D%3Br%5B0%5D%3Da.extend%28%7B%7D%2Cq%2Cr%5B0%5D%29%2Cthis.%24input.typeahead.apply%28this.%24input%2Cr%29%2Cthis.typeahead%3D%210%7D%7D%3Bc.prototype%3D%7Bconstructor%3Ac%2CcreateToken%3Afunction%28b%2Cc%29%7Bvar%20d%3Dthis%3Bif%28b%3D%22string%22%3D%3Dtypeof%20b%3F%7Bvalue%3Ab%2Clabel%3Ab%7D%3Aa.extend%28%7B%7D%2Cb%29%2C%22undefined%22%3D%3Dtypeof%20c%26%26%28c%3D%210%29%2Cb.value%3Da.trim%28b.value.toString%28%29%29%2Cb.label%3Db.label%26%26b.label.length%3Fa.trim%28b.label%29%3Ab.value%2Cb.value.length%26%26b.label.length%26%26%21%28b.label.length%3Cthis.options.minLength%29%26%26%21%28this.options.limit%26%26this.getTokens%28%29.length%3E%3Dthis.options.limit%29%29%7Bvar%20e%3Da.Event%28%22tokenfield%3Acreatetoken%22%2C%7Battrs%3Ab%7D%29%3Bif%28this.%24element.trigger%28e%29%2Ce.attrs%26%26%21e.isDefaultPrevented%28%29%29%7Bvar%20f%3Da%28%27%3Cdiv%20class%3D%22token%22%20/%3E%27%29.append%28%27%3Cspan%20class%3D%22token-label%22%20/%3E%27%29.append%28%27%3Ca%20href%3D%22%23%22%20class%3D%22close%22%20tabindex%3D%22-1%22%20aria-label%3D%22Remove%22%3E%26times%3B%3C/a%3E%27%29.data%28%22attrs%22%2Cb%29%3Bthis.%24input.hasClass%28%22tt-input%22%29%3Fthis.%24input.parent%28%29.before%28f%29%3Athis.%24input.before%28f%29%2Cthis.%24input.css%28%22width%22%2Cthis.options.minWidth+%22px%22%29%3Bvar%20g%3Df.find%28%22.token-label%22%29%2Ch%3Df.find%28%22.close%22%29%3Breturn%20this.maxTokenWidth%7C%7C%28this.maxTokenWidth%3Dthis.%24wrapper.width%28%29-h.width%28%29-10%29%2Cg.css%28%22max-width%22%2Cthis.maxTokenWidth%29%2Cthis.options.html%3Fg.html%28b.label%29%3Ag.text%28b.label%29%2Cf.on%28%22mousedown%22%2Cfunction%28a%29%7Breturn%20d._disabled%7C%7Cd._readonly%3F%211%3Avoid%28d.preventDeactivation%3D%210%29%7D%29.on%28%22click%22%2Cfunction%28a%29%7Breturn%20d._disabled%7C%7Cd._readonly%3F%211%3A%28d.preventDeactivation%3D%211%2Ca.ctrlKey%7C%7Ca.metaKey%3F%28a.preventDefault%28%29%2Cd.toggle%28f%29%29%3Avoid%20d.activate%28f%2Ca.shiftKey%2Ca.shiftKey%29%29%7D%29.on%28%22dblclick%22%2Cfunction%28a%29%7Breturn%20d._disabled%7C%7Cd._readonly%7C%7C%21d.options.allowEditing%3F%211%3Avoid%20d.edit%28f%29%7D%29%2Ch.on%28%22click%22%2Ca.proxy%28this.remove%2Cthis%29%29%2Cthis.%24element.trigger%28a.Event%28%22tokenfield%3Acreatedtoken%22%2C%7Battrs%3Ab%2CrelatedTarget%3Af.get%280%29%7D%29%29%2Cc%26%26this.%24element.val%28this.getTokensList%28%29%29.trigger%28a.Event%28%22change%22%2C%7Binitiator%3A%22tokenfield%22%7D%29%29%2CsetTimeout%28function%28%29%7Bd.update%28%29%7D%2C0%29%2Cthis.%24element.get%280%29%7D%7D%7D%2CsetTokens%3Afunction%28b%2Cc%2Cd%29%7Bif%28c%7C%7Cthis.%24wrapper.find%28%22.token%22%29.remove%28%29%2Cb%29%7B%22undefined%22%3D%3Dtypeof%20d%26%26%28d%3D%210%29%2C%22string%22%3D%3Dtypeof%20b%26%26%28b%3Dthis._delimiters.length%3Fb.split%28new%20RegExp%28%22%5B%22+this._delimiters.join%28%22%22%29+%22%5D%22%29%29%3A%5Bb%5D%29%3Bvar%20e%3Dthis%3Breturn%20a.each%28b%2Cfunction%28a%2Cb%29%7Be.createToken%28b%2Cd%29%7D%29%2Cthis.%24element.get%280%29%7D%7D%2CgetTokenData%3Afunction%28b%29%7Bvar%20c%3Db.map%28function%28%29%7Bvar%20b%3Da%28this%29%3Breturn%20b.data%28%22attrs%22%29%7D%29.get%28%29%3Breturn%201%3D%3D%3Dc.length%26%26%28c%3Dc%5B0%5D%29%2Cc%7D%2CgetTokens%3Afunction%28b%29%7Bvar%20c%3Dthis%2Cd%3D%5B%5D%2Ce%3Db%3F%22.active%22%3A%22%22%3Breturn%20this.%24wrapper.find%28%22.token%22+e%29.each%28function%28%29%7Bd.push%28c.getTokenData%28a%28this%29%29%29%7D%29%2Cd%7D%2CgetTokensList%3Afunction%28b%2Cc%2Cd%29%7Bb%3Db%7C%7Cthis._firstDelimiter%2Cc%3D%22undefined%22%21%3Dtypeof%20c%26%26null%21%3D%3Dc%3Fc%3Athis.options.beautify%3Bvar%20e%3Db+%28c%26%26%22%20%22%21%3D%3Db%3F%22%20%22%3A%22%22%29%3Breturn%20a.map%28this.getTokens%28d%29%2Cfunction%28a%29%7Breturn%20a.value%7D%29.join%28e%29%7D%2CgetInput%3Afunction%28%29%7Breturn%20this.%24input.val%28%29%7D%2CsetInput%3Afunction%28a%29%7Bthis.%24input.hasClass%28%22tt-input%22%29%3Fthis.%24input.typeahead%28%22val%22%2Ca%29%3Athis.%24input.val%28a%29%7D%2Clisten%3Afunction%28%29%7Bvar%20c%3Dthis%3Bthis.%24element.on%28%22change.tokenfield%22%2Ca.proxy%28this.change%2Cthis%29%29%2Cthis.%24wrapper.on%28%22mousedown%22%2Ca.proxy%28this.focusInput%2Cthis%29%29%2Cthis.%24input.on%28%22focus%22%2Ca.proxy%28this.focus%2Cthis%29%29.on%28%22blur%22%2Ca.proxy%28this.blur%2Cthis%29%29.on%28%22paste%22%2Ca.proxy%28this.paste%2Cthis%29%29.on%28%22keydown%22%2Ca.proxy%28this.keydown%2Cthis%29%29.on%28%22keypress%22%2Ca.proxy%28this.keypress%2Cthis%29%29.on%28%22keyup%22%2Ca.proxy%28this.keyup%2Cthis%29%29%2Cthis.%24copyHelper.on%28%22focus%22%2Ca.proxy%28this.focus%2Cthis%29%29.on%28%22blur%22%2Ca.proxy%28this.blur%2Cthis%29%29.on%28%22keydown%22%2Ca.proxy%28this.keydown%2Cthis%29%29.on%28%22keyup%22%2Ca.proxy%28this.keyup%2Cthis%29%29%2Cthis.%24input.on%28%22keypress%22%2Ca.proxy%28this.update%2Cthis%29%29.on%28%22keyup%22%2Ca.proxy%28this.update%2Cthis%29%29%2Cthis.%24input.on%28%22autocompletecreate%22%2Cfunction%28%29%7Bvar%20b%3Da%28this%29.data%28%22ui-autocomplete%22%29.menu.element%2Cd%3Dc.%24wrapper.outerWidth%28%29-parseInt%28b.css%28%22border-left-width%22%29%2C10%29-parseInt%28b.css%28%22border-right-width%22%29%2C10%29%3Bb.css%28%22min-width%22%2Cd+%22px%22%29%7D%29.on%28%22autocompleteselect%22%2Cfunction%28a%2Cb%29%7Breturn%20c.createToken%28b.item%29%26%26%28c.%24input.val%28%22%22%29%2Cc.%24input.data%28%22edit%22%29%26%26c.unedit%28%210%29%29%2C%211%7D%29.on%28%22typeahead%3Aselected%20typeahead%3Aautocompleted%22%2Cfunction%28a%2Cb%2Cd%29%7Bc.createToken%28b%29%26%26%28c.%24input.typeahead%28%22val%22%2C%22%22%29%2Cc.%24input.data%28%22edit%22%29%26%26c.unedit%28%210%29%29%7D%29%2Ca%28b%29.on%28%22resize%22%2Ca.proxy%28this.update%2Cthis%29%29%7D%2Ckeydown%3Afunction%28b%29%7Bfunction%20c%28a%29%7Bif%28e.%24input.is%28document.activeElement%29%29%7Bif%28e.%24input.val%28%29.length%3E0%29return%3Ba+%3D%22All%22%3Bvar%20c%3De.%24input.hasClass%28%22tt-input%22%29%3Fe.%24input.parent%28%29%5Ba%5D%28%22.token%3Afirst%22%29%3Ae.%24input%5Ba%5D%28%22.token%3Afirst%22%29%3Bif%28%21c.length%29return%3Be.preventInputFocus%3D%210%2Ce.preventDeactivation%3D%210%2Ce.activate%28c%29%2Cb.preventDefault%28%29%7Delse%20e%5Ba%5D%28b.shiftKey%29%2Cb.preventDefault%28%29%7Dfunction%20d%28c%29%7Bif%28b.shiftKey%29%7Bif%28e.%24input.is%28document.activeElement%29%29%7Bif%28e.%24input.val%28%29.length%3E0%29return%3Bvar%20d%3De.%24input.hasClass%28%22tt-input%22%29%3Fe.%24input.parent%28%29%5Bc+%22All%22%5D%28%22.token%3Afirst%22%29%3Ae.%24input%5Bc+%22All%22%5D%28%22.token%3Afirst%22%29%3Bif%28%21d.length%29return%3Be.activate%28d%29%7Dvar%20f%3D%22prev%22%3D%3D%3Dc%3F%22next%22%3A%22prev%22%2Cg%3D%22prev%22%3D%3D%3Dc%3F%22first%22%3A%22last%22%3Be.%24firstActiveToken%5Bf+%22All%22%5D%28%22.token%22%29.each%28function%28%29%7Be.deactivate%28a%28this%29%29%7D%29%2Ce.activate%28e.%24wrapper.find%28%22.token%3A%22+g%29%2C%210%2C%210%29%2Cb.preventDefault%28%29%7D%7Dif%28this.focused%29%7Bvar%20e%3Dthis%3Bswitch%28b.keyCode%29%7Bcase%208%3Aif%28%21this.%24input.is%28document.activeElement%29%29break%3Bthis.lastInputValue%3Dthis.%24input.val%28%29%3Bbreak%3Bcase%2037%3Ac%28%22rtl%22%3D%3D%3Dthis.textDirection%3F%22next%22%3A%22prev%22%29%3Bbreak%3Bcase%2038%3Ad%28%22prev%22%29%3Bbreak%3Bcase%2039%3Ac%28%22rtl%22%3D%3D%3Dthis.textDirection%3F%22prev%22%3A%22next%22%29%3Bbreak%3Bcase%2040%3Ad%28%22next%22%29%3Bbreak%3Bcase%2065%3Aif%28this.%24input.val%28%29.length%3E0%7C%7C%21b.ctrlKey%26%26%21b.metaKey%29break%3Bthis.activateAll%28%29%2Cb.preventDefault%28%29%3Bbreak%3Bcase%209%3Acase%2013%3Aif%28this.%24input.data%28%22ui-autocomplete%22%29%26%26this.%24input.data%28%22ui-autocomplete%22%29.menu.element.find%28%22li%3Ahas%28a.ui-state-focus%29%2C%20li.ui-state-focus%22%29.length%29break%3Bif%28this.%24input.hasClass%28%22tt-input%22%29%26%26this.%24wrapper.find%28%22.tt-cursor%22%29.length%29break%3Bif%28this.%24input.hasClass%28%22tt-input%22%29%26%26this.%24wrapper.find%28%22.tt-hint%22%29.val%28%29%26%26this.%24wrapper.find%28%22.tt-hint%22%29.val%28%29.length%29break%3Bif%28this.%24input.is%28document.activeElement%29%26%26this.%24input.val%28%29.length%7C%7Cthis.%24input.data%28%22edit%22%29%29return%20this.createTokensFromInput%28b%2Cthis.%24input.data%28%22edit%22%29%29%3Bif%28this.%24input.is%28document.activeElement%29%26%2613%3D%3D%3Db.keyCode%26%26%28b.preventDefault%28%29%2Cthis.%24element.trigger%28%22tokenfield%3Anext%22%29%29%2C13%3D%3D%3Db.keyCode%29%7Bif%28%21this.%24copyHelper.is%28document.activeElement%29%7C%7C1%21%3D%3Dthis.%24wrapper.find%28%22.token.active%22%29.length%29break%3Bif%28%21e.options.allowEditing%29break%3Bthis.edit%28this.%24wrapper.find%28%22.token.active%22%29%29%7D%7Dthis.lastKeyDown%3Db.keyCode%7D%7D%2Ckeypress%3Afunction%28b%29%7Bif%28-1%21%3D%3Da.inArray%28b.which%2Cthis._triggerKeys%29%26%26this.%24input.is%28document.activeElement%29%29%7Bvar%20c%3Dthis.%24input.val%28%29%2Cd%3D/%5E%22%5B%5E%22%5D*%24/.test%28c%29%3Bif%28d%29return%3Breturn%20c%26%26this.createTokensFromInput%28b%29%2C%211%7D%7D%2Ckeyup%3Afunction%28a%29%7Bif%28this.preventInputFocus%3D%211%2Cthis.focused%29%7Bswitch%28a.keyCode%29%7Bcase%208%3Aif%28this.%24input.is%28document.activeElement%29%29%7Bif%28this.%24input.val%28%29.length%7C%7Cthis.lastInputValue.length%26%268%3D%3D%3Dthis.lastKeyDown%29break%3Bthis.preventDeactivation%3D%210%3Bvar%20b%3Dthis.%24input.hasClass%28%22tt-input%22%29%3Fthis.%24input.parent%28%29.prevAll%28%22.token%3Afirst%22%29%3Athis.%24input.prevAll%28%22.token%3Afirst%22%29%3Bif%28%21b.length%29break%3Bthis.activate%28b%29%7Delse%20this.remove%28a%29%3Bbreak%3Bcase%2046%3Athis.remove%28a%2C%22next%22%29%7Dthis.lastKeyUp%3Da.keyCode%7D%7D%2Cfocus%3Afunction%28a%29%7Bthis.focused%3D%210%2Cthis.%24wrapper.addClass%28%22focus%22%29%2Cthis.%24input.is%28document.activeElement%29%26%26%28this.%24wrapper.find%28%22.active%22%29.removeClass%28%22active%22%29%2Cthis.%24firstActiveToken%3Dnull%2Cthis.options.showAutocompleteOnFocus%26%26this.search%28%29%29%7D%2Cblur%3Afunction%28a%29%7Bthis.focused%3D%211%2Cthis.%24wrapper.removeClass%28%22focus%22%29%2Cthis.preventDeactivation%7C%7Cthis.%24element.is%28document.activeElement%29%7C%7C%28this.%24wrapper.find%28%22.active%22%29.removeClass%28%22active%22%29%2Cthis.%24firstActiveToken%3Dnull%29%2C%21this.preventCreateTokens%26%26%28this.%24input.data%28%22edit%22%29%26%26%21this.%24input.is%28document.activeElement%29%7C%7Cthis.options.createTokensOnBlur%29%26%26this.createTokensFromInput%28a%29%2Cthis.preventDeactivation%3D%211%2Cthis.preventCreateTokens%3D%211%7D%2Cpaste%3Afunction%28a%29%7Bvar%20b%3Dthis%3Bb.options.allowPasting%26%26setTimeout%28function%28%29%7Bb.createTokensFromInput%28a%29%7D%2C1%29%7D%2Cchange%3Afunction%28a%29%7B%22tokenfield%22%21%3D%3Da.initiator%26%26this.setTokens%28this.%24element.val%28%29%29%7D%2CcreateTokensFromInput%3Afunction%28a%2Cb%29%7Bif%28%21%28this.%24input.val%28%29.length%3Cthis.options.minLength%29%29%7Bvar%20c%3Dthis.getTokensList%28%29%3Breturn%20this.setTokens%28this.%24input.val%28%29%2C%210%29%2Cc%3D%3D%3Dthis.getTokensList%28%29%26%26this.%24input.val%28%29.length%3F%211%3A%28this.setInput%28%22%22%29%2Cthis.%24input.data%28%22edit%22%29%26%26this.unedit%28b%29%2C%211%29%7D%7D%2Cnext%3Afunction%28a%29%7Bif%28a%29%7Bvar%20b%3Dthis.%24wrapper.find%28%22.active%3Afirst%22%29%2Cc%3Db%26%26this.%24firstActiveToken%3Fb.index%28%29%3Cthis.%24firstActiveToken.index%28%29%3A%211%3Bif%28c%29return%20this.deactivate%28b%29%7Dvar%20d%3Dthis.%24wrapper.find%28%22.active%3Alast%22%29%2Ce%3Dd.nextAll%28%22.token%3Afirst%22%29%3Breturn%20e.length%3Fvoid%20this.activate%28e%2Ca%29%3Avoid%20this.%24input.focus%28%29%7D%2Cprev%3Afunction%28a%29%7Bif%28a%29%7Bvar%20b%3Dthis.%24wrapper.find%28%22.active%3Alast%22%29%2Cc%3Db%26%26this.%24firstActiveToken%3Fb.index%28%29%3Ethis.%24firstActiveToken.index%28%29%3A%211%3Bif%28c%29return%20this.deactivate%28b%29%7Dvar%20d%3Dthis.%24wrapper.find%28%22.active%3Afirst%22%29%2Ce%3Dd.prevAll%28%22.token%3Afirst%22%29%3Breturn%20e.length%7C%7C%28e%3Dthis.%24wrapper.find%28%22.token%3Afirst%22%29%29%2Ce.length%7C%7Ca%3Fvoid%20this.activate%28e%2Ca%29%3Avoid%20this.%24input.focus%28%29%7D%2Cactivate%3Afunction%28b%2Cc%2Cd%2Ce%29%7Bif%28b%29%7Bif%28%22undefined%22%3D%3Dtypeof%20e%26%26%28e%3D%210%29%2Cd%26%26%28c%3D%210%29%2Cthis.%24copyHelper.focus%28%29%2Cc%7C%7C%28this.%24wrapper.find%28%22.active%22%29.removeClass%28%22active%22%29%2Ce%3Fthis.%24firstActiveToken%3Db%3Adelete%20this.%24firstActiveToken%29%2Cd%26%26this.%24firstActiveToken%29%7Bvar%20f%3Dthis.%24firstActiveToken.index%28%29-2%2Cg%3Db.index%28%29-2%2Ch%3Dthis%3Bthis.%24wrapper.find%28%22.token%22%29.slice%28Math.min%28f%2Cg%29+1%2CMath.max%28f%2Cg%29%29.each%28function%28%29%7Bh.activate%28a%28this%29%2C%210%29%7D%29%7Db.addClass%28%22active%22%29%2Cthis.%24copyHelper.val%28this.getTokensList%28null%2Cnull%2C%210%29%29.select%28%29%7D%7D%2CactivateAll%3Afunction%28%29%7Bvar%20b%3Dthis%3Bthis.%24wrapper.find%28%22.token%22%29.each%28function%28c%29%7Bb.activate%28a%28this%29%2C0%21%3D%3Dc%2C%211%2C%211%29%7D%29%7D%2Cdeactivate%3Afunction%28a%29%7Ba%26%26%28a.removeClass%28%22active%22%29%2Cthis.%24copyHelper.val%28this.getTokensList%28null%2Cnull%2C%210%29%29.select%28%29%29%7D%2Ctoggle%3Afunction%28a%29%7Ba%26%26%28a.toggleClass%28%22active%22%29%2Cthis.%24copyHelper.val%28this.getTokensList%28null%2Cnull%2C%210%29%29.select%28%29%29%7D%2Cedit%3Afunction%28b%29%7Bif%28b%29%7Bvar%20c%3Db.data%28%22attrs%22%29%2Cd%3D%7Battrs%3Ac%2CrelatedTarget%3Ab.get%280%29%7D%2Ce%3Da.Event%28%22tokenfield%3Aedittoken%22%2Cd%29%3Bif%28this.%24element.trigger%28e%29%2C%21e.isDefaultPrevented%28%29%29%7Bb.find%28%22.token-label%22%29.text%28c.value%29%3Bvar%20f%3Db.outerWidth%28%29%2Cg%3Dthis.%24input.hasClass%28%22tt-input%22%29%3Fthis.%24input.parent%28%29%3Athis.%24input%3Bb.replaceWith%28g%29%2Cthis.preventCreateTokens%3D%210%2Cthis.%24input.val%28c.value%29.select%28%29.data%28%22edit%22%2C%210%29.width%28f%29%2Cthis.update%28%29%2Cthis.%24element.trigger%28a.Event%28%22tokenfield%3Aeditedtoken%22%2Cd%29%29%7D%7D%7D%2Cunedit%3Afunction%28a%29%7Bvar%20b%3Dthis.%24input.hasClass%28%22tt-input%22%29%3Fthis.%24input.parent%28%29%3Athis.%24input%3Bif%28b.appendTo%28this.%24wrapper%29%2Cthis.%24input.data%28%22edit%22%2C%211%29%2Cthis.%24mirror.text%28%22%22%29%2Cthis.update%28%29%2Ca%29%7Bvar%20c%3Dthis%3BsetTimeout%28function%28%29%7Bc.%24input.focus%28%29%7D%2C1%29%7D%7D%2Cremove%3Afunction%28b%2Cc%29%7Bif%28%21%28this.%24input.is%28document.activeElement%29%7C%7Cthis._disabled%7C%7Cthis._readonly%29%29%7Bvar%20d%2Ce%3D%22click%22%3D%3D%3Db.type%3Fa%28b.target%29.closest%28%22.token%22%29%3Athis.%24wrapper.find%28%22.token.active%22%29%3B%22click%22%21%3D%3Db.type%26%26%28c%7C%7C%28c%3D%22prev%22%29%2Cthis%5Bc%5D%28%29%2C%22prev%22%3D%3D%3Dc%26%26%28d%3D0%3D%3D%3De.first%28%29.prevAll%28%22.token%3Afirst%22%29.length%29%29%3Bvar%20f%3D%7Battrs%3Athis.getTokenData%28e%29%2CrelatedTarget%3Ae.get%280%29%7D%2Cg%3Da.Event%28%22tokenfield%3Aremovetoken%22%2Cf%29%3Bif%28this.%24element.trigger%28g%29%2C%21g.isDefaultPrevented%28%29%29%7Bvar%20h%3Da.Event%28%22tokenfield%3Aremovedtoken%22%2Cf%29%2Ci%3Da.Event%28%22change%22%2C%7Binitiator%3A%22tokenfield%22%7D%29%3Be.remove%28%29%2Cthis.%24element.val%28this.getTokensList%28%29%29.trigger%28h%29.trigger%28i%29%2C%28%21this.%24wrapper.find%28%22.token%22%29.length%7C%7C%22click%22%3D%3D%3Db.type%7C%7Cd%29%26%26this.%24input.focus%28%29%2Cthis.%24input.css%28%22width%22%2Cthis.options.minWidth+%22px%22%29%2Cthis.update%28%29%2Cb.preventDefault%28%29%2Cb.stopPropagation%28%29%7D%7D%7D%2Cupdate%3Afunction%28a%29%7Bvar%20b%3Dthis.%24input.val%28%29%2Cc%3DparseInt%28this.%24input.css%28%22padding-left%22%29%2C10%29%2Cd%3DparseInt%28this.%24input.css%28%22padding-right%22%29%2C10%29%2Ce%3Dc+d%3Bif%28this.%24input.data%28%22edit%22%29%29%7Bif%28b%7C%7C%28b%3Dthis.%24input.prop%28%22placeholder%22%29%29%2Cb%3D%3D%3Dthis.%24mirror.text%28%29%29return%3Bthis.%24mirror.text%28b%29%3Bvar%20f%3Dthis.%24mirror.width%28%29+10%3Bif%28f%3Ethis.%24wrapper.width%28%29%29return%20this.%24input.width%28this.%24wrapper.width%28%29%29%3Bthis.%24input.width%28f%29%7Delse%7Bthis.%24input.width%28this.options.minWidth%29%3Bvar%20g%3D%22rtl%22%3D%3D%3Dthis.textDirection%3Fthis.%24input.offset%28%29.left+this.%24input.outerWidth%28%29-this.%24wrapper.offset%28%29.left-parseInt%28this.%24wrapper.css%28%22padding-left%22%29%2C10%29-e-1%3Athis.%24wrapper.offset%28%29.left+this.%24wrapper.width%28%29+parseInt%28this.%24wrapper.css%28%22padding-left%22%29%2C10%29-this.%24input.offset%28%29.left-e%3BisNaN%28g%29%3Fthis.%24input.width%28%22100%25%22%29%3Athis.%24input.width%28g%29%7D%7D%2CfocusInput%3Afunction%28b%29%7Bif%28%21%28a%28b.target%29.closest%28%22.token%22%29.length%7C%7Ca%28b.target%29.closest%28%22.token-input%22%29.length%7C%7Ca%28b.target%29.closest%28%22.tt-dropdown-menu%22%29.length%29%29%7Bvar%20c%3Dthis%3BsetTimeout%28function%28%29%7Bc.%24input.focus%28%29%7D%2C0%29%7D%7D%2Csearch%3Afunction%28%29%7Bthis.%24input.data%28%22ui-autocomplete%22%29%26%26this.%24input.autocomplete%28%22search%22%29%7D%2Cdisable%3Afunction%28%29%7Bthis.setProperty%28%22disabled%22%2C%210%29%7D%2Cenable%3Afunction%28%29%7Bthis.setProperty%28%22disabled%22%2C%211%29%7D%2Creadonly%3Afunction%28%29%7Bthis.setProperty%28%22readonly%22%2C%210%29%7D%2Cwriteable%3Afunction%28%29%7Bthis.setProperty%28%22readonly%22%2C%211%29%7D%2CsetProperty%3Afunction%28a%2Cb%29%7Bthis%5B%22_%22+a%5D%3Db%2Cthis.%24input.prop%28a%2Cb%29%2Cthis.%24element.prop%28a%2Cb%29%2Cthis.%24wrapper%5Bb%3F%22addClass%22%3A%22removeClass%22%5D%28a%29%7D%2Cdestroy%3Afunction%28%29%7Bthis.%24element.val%28this.getTokensList%28%29%29%2Cthis.%24element.css%28this.%24element.data%28%22original-styles%22%29%29%2Cthis.%24element.prop%28%22tabindex%22%2Cthis.%24element.data%28%22original-tabindex%22%29%29%3Bvar%20b%3Da%28%27label%5Bfor%3D%22%27+this.%24input.prop%28%22id%22%29+%27%22%5D%27%29%3Bb.length%26%26b.prop%28%22for%22%2Cthis.%24element.prop%28%22id%22%29%29%2Cthis.%24element.insertBefore%28this.%24wrapper%29%2Cthis.%24element.off%28%22.tokenfield%22%29%2Cthis.%24element.removeData%28%22original-styles%22%29.removeData%28%22original-tabindex%22%29.removeData%28%22bs.tokenfield%22%29%2Cthis.%24wrapper.remove%28%29%2Cthis.%24mirror.remove%28%29%3Bvar%20c%3Dthis.%24element%3Breturn%20c%7D%7D%3Bvar%20d%3Da.fn.tokenfield%3Breturn%20a.fn.tokenfield%3Dfunction%28b%2Cd%29%7Bvar%20e%2Cf%3D%5B%5D%3BArray.prototype.push.apply%28f%2Carguments%29%3Bvar%20g%3Dthis.each%28function%28%29%7Bvar%20g%3Da%28this%29%2Ch%3Dg.data%28%22bs.tokenfield%22%29%2Ci%3D%22object%22%3D%3Dtypeof%20b%26%26b%3B%22string%22%3D%3Dtypeof%20b%26%26h%26%26h%5Bb%5D%3F%28f.shift%28%29%2Ce%3Dh%5Bb%5D.apply%28h%2Cf%29%29%3Ah%7C%7C%22string%22%3D%3Dtypeof%20b%7C%7Cd%7C%7C%28g.data%28%22bs.tokenfield%22%2Ch%3Dnew%20c%28this%2Ci%29%29%2Cg.trigger%28%22tokenfield%3Ainitialize%22%29%29%7D%29%3Breturn%22undefined%22%21%3Dtypeof%20e%3Fe%3Ag%7D%2Ca.fn.tokenfield.defaults%3D%7BminWidth%3A60%2CminLength%3A0%2Chtml%3A%210%2CallowEditing%3A%210%2CallowPasting%3A%210%2Climit%3A0%2Cautocomplete%3A%7B%7D%2Ctypeahead%3A%7B%7D%2CshowAutocompleteOnFocus%3A%211%2CcreateTokensOnBlur%3A%211%2Cdelimiter%3A%22%2C%22%2Cbeautify%3A%210%2CinputType%3A%22text%22%7D%2Ca.fn.tokenfield.Constructor%3Dc%2Ca.fn.tokenfield.noConflict%3Dfunction%28%29%7Breturn%20a.fn.tokenfield%3Dd%2Cthis%7D%2Cc%7D%29%3B%0A'))</script>
