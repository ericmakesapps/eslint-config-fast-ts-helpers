module.exports = {
	rules: {
		"react-hooks/exhaustive-deps": [
			"error",
			{
				additionalHooks:
					"use(Backed(Ref|State)|Observe(ChildList|Size|WindowWidth)?|OnWindow(Resize|Scroll)|UpdatingState(Ref)?)"
			}
		]
	}
}
