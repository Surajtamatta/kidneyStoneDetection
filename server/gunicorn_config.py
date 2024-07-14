# gunicorn_config.py

# Number of worker processes, adjust based on your server's resources
workers = 4

# IP address and port to bind
bind = '0.0.0.0:8080'

# Timeout settings (adjust as needed)
timeout = 120  # 120 seconds

# Log level
loglevel = 'info'

# Access log filename (- for stdout)
accesslog = '-'  
