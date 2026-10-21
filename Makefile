
.PHONY: help dev backend frontend db-up db-down db-logs db-status db-shell

help:
	@echo "Available commands:"
	@echo "  make dev        - Start database, backend and frontend"
	@echo "  make backend    - Start only the backend"
	@echo "  make frontend   - Start only the frontend"
	@echo "  make db-up      - Start PostgreSQL"
	@echo "  make db-down    - Stop PostgreSQL"
	@echo "  make db-logs    - Follow PostgreSQL logs"
	@echo "  make db-status  - Show container status"
	@echo "  make db-shell   - Open PostgreSQL terminal"

dev: db-up
	$(MAKE) -j2 --output-sync=target backend frontend

backend:
	cd backend && npm run dev

frontend:
	cd frontend && npm run dev

db-up:
	docker compose up -d db

db-down:
	docker compose down

db-logs:
	docker compose logs -f db

db-status:
	docker compose ps

db-shell:
	docker compose exec db sh -c 'psql -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"'
