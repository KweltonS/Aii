const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Anchor,
		C3.Plugins.iframe,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Якорь: 0},
	{Loading_icons: 0},
	{iframe2: 0},
	{Браузер: 0}
];

self.InstanceType = {
	Loading_icons: class extends self.ISpriteInstance {},
	iframe2: class extends self.IIframeInstance {},
	Браузер: class extends self.IInstance {}
}