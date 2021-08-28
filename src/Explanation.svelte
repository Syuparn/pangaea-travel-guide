<div>
    <slot></slot>
</div>

<style>
    div {
        margin: 1rem;
        padding: 1rem;
        background-color: #404510;
        color: #dddddd;
        text-align: left; 
        line-height: 1.75em;
    }

    @media (min-width: 640px) {
		div {
			flex: 1;
		}
	}
</style>
